import React, { FC, useEffect, useState } from 'react';
import { Meta } from '@storybook/react';
import { Pagination } from './Pagination';
import { PostAPI } from 'assets/utils/api';

export default {
    title: 'UI Elements/Pagination',
    component: Pagination
} as Meta;

const data1 = [
    {
        id: 1,
        title: '1',
        link: '/'
    }
];

const data2 = [
    {
        id: 1,
        title: '1',
        link: '/'
    },
    {
        id: 2,
        title: '2',
        link: '/'
    }
];

const data3 = [
    {
        id: 1,
        title: '1',
        link: '/'
    },
    {
        id: 2,
        title: '2',
        link: '/'
    },
    {
        id: 3,
        title: '3',
        link: '/'
    },
    {
        id: 4,
        title: '4',
        link: '/'
    },
    {
        id: 5,
        title: '5',
        link: '/'
    },
    {
        id: 6,
        title: '6',
        link: '/'
    }
];

export const Basic: FC = () => <Pagination postsPerPage={1} totalPosts={data2} paginate={() => ''} />;

export const All: FC = () => (
    <>
        <Pagination postsPerPage={1} totalPosts={data1} paginate={() => ''} />
        <Pagination postsPerPage={1} totalPosts={data2} paginate={() => ''} />
        <Pagination postsPerPage={2} totalPosts={data3} paginate={() => ''} />
    </>
);

export const Api = () => {
    const [data, setData] = useState<any>();

    useEffect(() => {
        async function getPost() {
            const get = await PostAPI;
            setData(get);
        }

        getPost();
    }, []);

    return <Pagination totalPosts={data ? data.data : []} postsPerPage={10} paginate={() => ''} />;
};
