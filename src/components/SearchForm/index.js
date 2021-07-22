import React, { useEffect, useRef, useState } from 'react';
import {
  Button,
  CloseIcon,
  Content,
  FormWrapper,
  Input,
  Wrapper,
  Location,
  Locations,
  SearchIcon,
  NoResult,
} from './SearchForm.styles';
import { MdClose } from 'react-icons/md';
import { CgChevronRight } from 'react-icons/cg';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../Spinner';
import { reset, searchLocation } from '../../features/reducers/locationSlice';
import { getWeatherOfLocation } from '../../features/reducers/weatherSlice';
const SearchForm = ({ isOpenSearchForm, closeSearchForm }) => {
  const { list, loading, error } = useSelector((state) => state.location);
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef();
  const dispatch = useDispatch();
  const isStartSearch = useRef(false);

  useEffect(() => {
    if (isOpenSearchForm) {
      inputRef.current.focus();
    }
  }, [isOpenSearchForm]);

  const handleSearchLocation = (e) => {
    e.preventDefault();
    if (!searchTerm || !searchTerm.length) return;

    if (!isStartSearch.current) isStartSearch.current = true;
    dispatch(searchLocation({ query: searchTerm }));
    setSearchTerm('');
  };

  const handleSearchWeather = (location) => {
    dispatch(getWeatherOfLocation({ woeid: location.woeid }));
    setSearchTerm('');
    isStartSearch.current = false;
    dispatch(reset());
    closeSearchForm();
  };

  if (error) {
    return <p>Error!</p>;
  }

  return (
    <Wrapper isOpenSearchForm={isOpenSearchForm}>
      <CloseIcon
        onClick={() => {
          setSearchTerm('');
          isStartSearch.current = false;
          dispatch(reset());
          closeSearchForm();
        }}
      >
        <MdClose />
      </CloseIcon>
      <Content>
        <FormWrapper onSubmit={handleSearchLocation}>
          <Input
            ref={inputRef}
            type='text'
            placeholder='search location'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button type='submit'>Search</Button>
          <SearchIcon />
        </FormWrapper>
        {loading ? (
          <Spinner />
        ) : list.length === 0 ? (
          isStartSearch.current ? (
            <NoResult>No results</NoResult>
          ) : (
            <NoResult>Type something to search</NoResult>
          )
        ) : (
          <Locations>
            {list.map((location, index) => (
              <Location
                key={index}
                onClick={() => handleSearchWeather(location)}
              >
                <span>{location.title}</span>
                <CgChevronRight />
              </Location>
            ))}
          </Locations>
        )}
      </Content>
    </Wrapper>
  );
};

export default SearchForm;
