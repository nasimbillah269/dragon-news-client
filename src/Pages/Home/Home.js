import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import NewsSummaryCart from '../../Sheard/NewsSummaryCart/NewsSummaryCart';

const Home = () => {
    useTitle("Home")
    const allNews = useLoaderData();
    return (
        <div>
            <h2>All Dragon news : {allNews.length}</h2>
            {
                allNews.map(news => <NewsSummaryCart
                    key={news._id}
                    news={news}
                ></NewsSummaryCart>)
            }

        </div>
    );
};

export default Home;