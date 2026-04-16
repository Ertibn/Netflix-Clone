import React from 'react'
import Row  from '../Row/Row'
import requests from './../../../utils/request';

const RowList = () => {
  return (
    <>
      <Row 
      title="NETFLIX ORIGINALS"
      fetchUrl={requests.  fetchNetflixOriginals}
      isLargeRow={true}
      />
      <Row title="Treading Now" fetchUrl={requests.fetchTrending}
      isLargeRow={true}
      />
    </>
  )
}

export default RowList;