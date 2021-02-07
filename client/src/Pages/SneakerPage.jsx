import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Data from './data.json';
import PageBottom from './SneakerPage/PageBottom';
import PageTop from './SneakerPage/PageTop';

const SneakerPage = () => {
  let { id } = useParams();

  useEffect(()=> {

  }, )

  return (
    <div className="product">
      <PageTop Data={Data} id={id} />
      <PageBottom />
    </div>
  );
};

export default SneakerPage;
