import React, { useCallback, useEffect, useRef } from 'react';
import {
  Content,
  Wrapper,
  ButtonWrapper,
  Button,
  Icon,
  Image,
  Temp,
  Desc,
  Divider,
  Text,
  Location,
} from './Left.styles';
import { IoMdLocate } from 'react-icons/io';
import Shower from '../../assets/Shower.png';
import { MdLocationOn } from 'react-icons/md';
import SearchForm from '../SearchForm';
import axios from 'axios';
import { baseUrl, imageUrl } from '../../config';
import { useDispatch, useSelector } from 'react-redux';
import {
  finish,
  getWeatherOfLocation,
  start,
} from '../../features/reducers/weatherSlice';
import Spinner from '../Spinner';
import moment from 'moment';
const Left = ({ isOpenSearchForm, closeSearchForm, openSearchForm }) => {
  const positionRef = useRef(null);
  const dispatch = useDispatch();
  const { detail, loading, error } = useSelector((state) => state.weather);

  console.log(moment(new Date()).format('ddd, DD MMM'));

  const getCurrentPositionWeather = useCallback(async (position) => {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    try {
      const { data } = await axios.get(
        `${baseUrl}/location/search/?lattlong=${lat},${long}`
      );
      dispatch(getWeatherOfLocation({ woeid: data[0].woeid }));
    } catch (error) {
      dispatch(finish());
    }
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      dispatch(start());
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          positionRef.current = position;
          getCurrentPositionWeather(position);
        },
        (error) => {
          console.log(error);
          dispatch(finish());
        }
      );
    }
  }, [dispatch, getCurrentPositionWeather]);

  if (error) return <p>Error</p>;

  return (
    <Wrapper>
      <SearchForm
        isOpenSearchForm={isOpenSearchForm}
        closeSearchForm={closeSearchForm}
      />

      <Content>
        <ButtonWrapper>
          <Button onClick={openSearchForm}>Search for places</Button>
          <Icon
            onClick={() => {
              getCurrentPositionWeather(positionRef.current);
            }}
          >
            <IoMdLocate />
          </Icon>
        </ButtonWrapper>
        {loading ? (
          <>
            <Spinner />
          </>
        ) : (
          detail.consolidated_weather && (
            <>
              <Image
                src={`${imageUrl}${detail.consolidated_weather[0].weather_state_abbr}.svg`}
              />
              <Temp>
                {Math.round(
                  (detail.consolidated_weather[0].min_temp +
                    detail.consolidated_weather[0].max_temp) /
                    2
                )}
                <span>&deg;C</span>
              </Temp>
              <Desc>
                {detail.consolidated_weather &&
                  detail.consolidated_weather[0].weather_state_name}
              </Desc>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Text>Today</Text>
                <Divider />
                <Text>
                  {moment(
                    new Date(detail.consolidated_weather[0].applicable_date)
                  ).format('ddd, DD MMM')}
                </Text>
                {/* <Text></Text> */}
              </div>
              <Location>
                <MdLocationOn />
                <Text> {detail.title}</Text>
              </Location>
            </>
          )
        )}
      </Content>
    </Wrapper>
  );
};

export default Left;
