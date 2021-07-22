import moment from 'moment';
import React from 'react';
import { useSelector } from 'react-redux';
import { imageUrl } from '../../config';
import {
  Bottom,
  Content,
  Footer,
  Forecast,
  ForecastItem,
  Hightlight,
  HightlightItem,
  Info,
  Note,
  Percent,
  Progress,
  SmallText,
  Title,
  Wrapper,
} from './Right.styles';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { RiNavigationFill } from 'react-icons/ri';

const Right = () => {
  const { detail, loading, error } = useSelector((state) => state.weather);

  if (error) return <p>Error</p>;

  return (
    <Wrapper>
      <Content>
        <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
          <Forecast>
            {loading ? (
              <>
                {[...new Array(5)].map((_, index) => (
                  <Skeleton width='100%' height={130} key={index} />
                ))}
              </>
            ) : (
              detail.consolidated_weather &&
              detail.consolidated_weather?.slice(1).map((item, index) => (
                <ForecastItem key={index}>
                  <span>
                    {index === 0
                      ? 'Tomorrow'
                      : moment(new Date(item.applicable_date)).format(
                          'ddd, DD MMM'
                        )}
                  </span>
                  <img src={`${imageUrl}${item.weather_state_abbr}.svg`} />
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      width: '100%',
                    }}
                  >
                    <span>{Math.round(item.max_temp)}&deg;C</span>
                    <span>{Math.round(item.min_temp)}&deg;C</span>
                  </div>
                </ForecastItem>
              ))
            )}
          </Forecast>
          <Bottom>
            <Title>Today's Hightlights</Title>

            <Hightlight>
              {loading ? (
                <>
                  {[...new Array(4)].map((_, index) => (
                    <Skeleton width='100%' height={130} key={index} />
                  ))}
                </>
              ) : (
                detail.consolidated_weather && (
                  <>
                    <HightlightItem>
                      <SmallText>Wind status</SmallText>
                      <Info>
                        {detail.consolidated_weather[0].wind_speed.toLocaleString(
                          'en-GB',
                          {
                            maximumFractionDigits: 1,
                          }
                        )}
                        <span>mph</span>
                      </Info>
                      <Note>
                        <RiNavigationFill />
                        <SmallText>wsw</SmallText>
                      </Note>
                    </HightlightItem>
                    <HightlightItem>
                      <SmallText>Humidity</SmallText>
                      <Info>
                        {detail.consolidated_weather[0].humidity}
                        <span>%</span>
                      </Info>
                      <Percent>
                        <SmallText>0</SmallText>
                        <SmallText>50</SmallText>
                        <SmallText>100</SmallText>
                      </Percent>
                      <Progress
                        width={`${detail.consolidated_weather[0].humidity}%`}
                      >
                        <span></span>
                      </Progress>
                    </HightlightItem>
                    <HightlightItem>
                      <SmallText>Visibility</SmallText>
                      <Info>
                        {detail.consolidated_weather[0].visibility.toLocaleString(
                          'en-GB',
                          {
                            maximumFractionDigits: 1,
                          }
                        )}
                        <span style={{ marginLeft: '5px' }}>miles</span>
                      </Info>
                    </HightlightItem>
                    <HightlightItem>
                      <SmallText>Air Pressure</SmallText>
                      <Info>
                        {Math.round(
                          detail.consolidated_weather[0].air_pressure
                        )}
                        <span style={{ marginLeft: '5px' }}>mb</span>
                      </Info>
                    </HightlightItem>
                  </>
                )
              )}
            </Hightlight>
            <Footer>
              created by <a href='/'>Luong dao</a> - devChallenges.io
            </Footer>
          </Bottom>
        </SkeletonTheme>
      </Content>
    </Wrapper>
  );
};

export default Right;
