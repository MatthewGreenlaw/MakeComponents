import get from './Common/api/get.js';
import post from './Common/api/post.js';
import useGetApi from './Hooks/useGetApi';
import useState from './Hooks/useState'

const mcAPI = {
    get,
    post,
};

const mcHooks = {
    useGetApi,
    useState,
}

module.exports = {
    mcAPI,
    mcHooks,
};