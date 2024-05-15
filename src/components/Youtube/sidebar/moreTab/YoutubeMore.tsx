import React from "react";
import MenuList from "../menuList/MenuList";
import * as S from "./styled/moreTab.styled";
const YoutubeMore = () => {
  const youTubeMoreImgUrl = process.env.REACT_APP_IMG_PATH;

  const YoutubeMoreTab = ["YouTube Premium", "YouTube Music", "Youtube Kids"];

  const YoutubeMoreTabIcon = [`youtube.png`, `music.png`, `youtube-kids.png`];

  const YoutubeMoreTabIconUrls = YoutubeMoreTabIcon.map(
    (png) => `${youTubeMoreImgUrl}/${png}`
  );

  return (
    <S.YoutubeMore>
      <p>YouTube 더보기</p>
      {YoutubeMoreTab.map((menu, index) => (
        <MenuList
          key={index}
          menu={menu}
          imageUrl={YoutubeMoreTabIconUrls[index]}
        />
      ))}
    </S.YoutubeMore>
  );
};

export default YoutubeMore;
