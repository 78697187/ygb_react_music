import React from "react";
import { Redirect } from "react-router-dom";

import McDiscover from "@/pages/discover";
import McMine from "@/pages/mine";
import McFriends from "@/pages/friends";
import McRecommend from "../pages/discover/c-pages/recommend";
import McRanking from "../pages/discover/c-pages/ranking";
import McDjradio from "../pages/discover/c-pages/djradio";
import McArtist from "../pages/discover/c-pages/artist";
import McAlbum from "../pages/discover/c-pages/album";
import McSongs from "../pages/discover/c-pages/songs";
import McPlayer from "../pages/player";




const routes = [
  {
    path: "/",
    exact: true,
    render: ()=> (
      /* 发现是这个路由地址就会渲染Redirect组件，redirect组件一旦被渲染就会自动跳转到to的路由地址 */
      <Redirect to="/discover"/> /* 一旦出现组件  jsx就会自动转化为react.createElement */
    )
  },
  {
    path: "/discover",
    component: McDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => (
          <Redirect to={"/discover/recommend"} />
        )
      },
      {
        path: "/discover/recommend",
        component: McRecommend
      },
      {
        path: "/discover/ranking",
        component: McRanking
      },
      {
        path: "/discover/songs",
        component: McSongs
      },
      {
        path: "/discover/djradio",
        exact: true,
        component: McDjradio
      },
      {
        path: "/discover/artist",
        component: McArtist
      },
      {
        path: "/discover/album",
        component: McAlbum
      },
      {
        path: "/discover/player",
        component: McPlayer
      }
    ]
  },
  {
    path: "/mine",
    component: McMine
  },
  {
    path: "/friend",
    component: McFriends
  }
];

export default routes;