/*
*
*  Home page
*  default view at /
*  Queries db and maps result to UI
* 
*/

import React from 'react';
import Head from 'next/head';

const url = 'http://localhost:3000/api/projects';

export async function getStaticProps() {

  const res = await fetch(url);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      data
    }
  }
}

export default function Index(props) {

  const projects = props.data;

  return (
    <div>
    <Head>
      <title>Brian Beal | Software Engineer</title>
      <meta name="description" content="Portfolio website for software engineer Brian Beal" />
    </Head>
      <h1>index</h1>
      {
        projects.map((project) => {
          return <p key={project.id}>{project.name}</p>
        })
      }
    </div>
  )
}

