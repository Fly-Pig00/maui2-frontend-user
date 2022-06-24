<<<<<<< HEAD
import React, { useState, useEffect, useMemo } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import moment from 'moment';
import { apiHistoryFetchAll } from '../../../saga/actions/workflow';
import LoadingIcon from '../../../components/BackgroundWorker/loading';

function History(props) {
  const history = useHistory();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function handleGoBack(){
    history.push('/dashboard');
  }

  const apiHistoryFetchAll = props.apiHistoryFetchAll;
  const isLogged = props.workflow.isLogged;
  useEffect(() => {
    if (!isLogged)
      return;
    setIsLoading(true);
    apiHistoryFetchAll({
      url: '/recordFetchAll',
      method: 'GET',
      success: (res) => {
        setData(res.records);
        console.log('fetchAllSuccess', res);
        setIsLoading(false);
      },
      fail: (error) => {
        console.log('fetchAllError', error);
        setIsLoading(false);
      }
    })
  }, [apiHistoryFetchAll, isLogged]);

	const columns = useMemo(
		() => [
			// {
				
			// 	cell: () => <button onClick={handleButtonClick}>Action</button>,
			// 	ignoreRowClick: true,
			// 	allowOverflow: true,
			// 	button: true,
			// },
			{
				name: 'Time',
				selector: row => moment(row.createdAt).format('YYYY-MM-DD HH:mm:ss'),
				sortable: true,
			},
			{
				name: 'Type',
				selector: row => row.type,
				sortable: true,
			},
			{
				name: 'Network',
				selector: row => row.network,
				sortable: true,
				// right: true,
			},
			{
				name: 'Amount',
				selector: row => row.amount,
				sortable: true,
			},
			{
				name: '$',
				selector: row => row.currency,
				sortable: true,
        width: '60px'
			},
		],
		[],
	);

  return (
    <div className='relative w-full min-h-[800px] md:min-h-[1000px] bg-main-background dark:bg-main-background-dark bg-center bg-cover'>
      {/* card */}
      <div className='absolute w-[350px] top-[150px] left-[calc(50%-175px)] md:w-[1020px] min-h-[500px] md:min-h-[700px] md:top-[220px] md:left-[calc(50%-510px)] bg-deposit-card dark:bg-deposit-card-dark shadow-stocks-card dark:shadow-stocks-card-dark border border-[#FFFFFF] rounded-[33px] p-[30px]'>
        <span
          onClick={handleGoBack}
          className='absolute top-[25px] left-[30px] text-[30px] cursor-pointer text-[#000000] dark:text-[#FFFFFF]'
        >&lt;</span>
        <div className='mt-[50px] h-[500px] md:h-[600px] overflow-y-auto'>
          {isLoading ?
            <LoadingIcon />
          :
            <DataTable
              data={data}
              columns={columns}
              defaultSortAsc={false}
              defaultSortFieldId={1}
            />
          }
        </div>
        
      </div>
    </div>
  )
}

export default compose(
  connect(
    state => ({
      workflow: state.workflow
    }),
    {
      apiHistoryFetchAll,
    }
  )
=======
import React, { useState, useEffect, useMemo } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import moment from 'moment';
import { apiHistoryFetchAll } from '../../../saga/actions/workflow';
import LoadingIcon from '../../../components/BackgroundWorker/loading';

function History(props) {
  const history = useHistory();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function handleGoBack(){
    history.push('/dashboard');
  }

  const apiHistoryFetchAll = props.apiHistoryFetchAll;
  const isLogged = props.workflow.isLogged;
  useEffect(() => {
    if (!isLogged)
      return;
    setIsLoading(true);
    apiHistoryFetchAll({
      url: '/recordFetchAll',
      method: 'GET',
      success: (res) => {
        setData(res.records);
        console.log('fetchAllSuccess', res);
        setIsLoading(false);
      },
      fail: (error) => {
        console.log('fetchAllError', error);
        setIsLoading(false);
      }
    })
  }, [apiHistoryFetchAll, isLogged]);

	const columns = useMemo(
		() => [
			// {
				
			// 	cell: () => <button onClick={handleButtonClick}>Action</button>,
			// 	ignoreRowClick: true,
			// 	allowOverflow: true,
			// 	button: true,
			// },
			{
				name: 'Time',
				selector: row => moment(row.createdAt).format('YYYY-MM-DD HH:mm:ss'),
				sortable: true,
			},
			{
				name: 'Type',
				selector: row => row.type,
				sortable: true,
			},
			{
				name: 'Network',
				selector: row => row.network,
				sortable: true,
				// right: true,
			},
			{
				name: 'Amount',
				selector: row => row.amount,
				sortable: true,
			},
			{
				name: '$',
				selector: row => row.currency,
				sortable: true,
        width: '60px'
			},
		],
		[],
	);

  return (
    <div className='relative w-full min-h-[800px] md:min-h-[1000px] bg-main-background dark:bg-main-background-dark bg-center bg-cover'>
      {/* card */}
      <div className='absolute w-[350px] top-[150px] left-[calc(50%-175px)] md:w-[1020px] min-h-[500px] md:min-h-[700px] md:top-[220px] md:left-[calc(50%-510px)] bg-deposit-card dark:bg-deposit-card-dark shadow-stocks-card dark:shadow-stocks-card-dark border border-[#FFFFFF] rounded-[33px] p-[30px]'>
        <span
          onClick={handleGoBack}
          className='absolute top-[25px] left-[30px] text-[30px] cursor-pointer text-[#000000] dark:text-[#FFFFFF]'
        >&lt;</span>
        <div className='mt-[50px] h-[500px] md:h-[600px] overflow-y-auto'>
          {isLoading ?
            <LoadingIcon />
          :
            <DataTable
              data={data}
              columns={columns}
              defaultSortAsc={false}
              defaultSortFieldId={1}
            />
          }
        </div>
        
      </div>
    </div>
  )
}

export default compose(
  connect(
    state => ({
      workflow: state.workflow
    }),
    {
      apiHistoryFetchAll,
    }
  )
>>>>>>> 3a060482d917cd2b6df3cc1297157ec8cc7345d3
)(History);