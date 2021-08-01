/*
*
*  Home page
*  default view at /
*  Queries db and maps result to UI
* 
*/

import React from 'react';
import Head from 'next/head';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

// define query to get all product data
const GET_COLLECTION = gql`
  query {
    allProjects {
      name
    }
  }
`;

export default function Index() {

  // utilize the useQuery hook passing in the GET_COLLECTION query, to return data
  const { loading, error, data } = useQuery(GET_COLLECTION);

  // check that data has loaded
  if (loading) return "Loading...";
  if (error) return "Error...";
  if (!data) return "Not found..."

  console.log(data);

  // once data has loaded, populate page
  return (
    <div>
    <Head>
      <title>Brian Beal | Software Engineer</title>
      <meta name="description" content="Portfolio website for software engineer Brian Beal" />
    </Head>
      <h1>index</h1>
        {
          data.allProjects.map((project) => {
            return <p key={project.id}>{project.name}</p>
          })
        }
    </div>
  )
}