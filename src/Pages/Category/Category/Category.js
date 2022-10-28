import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../Hooks/useTitle';
import NewsSummaryCart from '../../../Sheard/NewsSummaryCart/NewsSummaryCart';

const Category = () => {
    useTitle('Category')
    const categoryNews = useLoaderData();
    return (
        <div>
            {
                categoryNews.map(news => <NewsSummaryCart
                    key={news._id}
                    news={news}
                ></NewsSummaryCart>)
            }
        </div>
    );
};

export default Category;