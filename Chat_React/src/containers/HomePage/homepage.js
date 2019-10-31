import React from "react";
import {
  Row,
  Col_1_of_2,
  HomePageText,
  HomePageContext,
  HomePageImage,
  HomePageButton
} from "./styles";

export const Homepage = () => {
  return (
    <div>
      <Row>
        <Col_1_of_2>
          <HomePageText>Live CHAT</HomePageText>
          <HomePageContext>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
            <div>
              <HomePageButton to="signup">Register Now</HomePageButton>
            </div>
          </HomePageContext>
        </Col_1_of_2>

        <Col_1_of_2>
          <HomePageImage
            src="https://firebasestorage.googleapis.com/v0/b/livechat-12a55.appspot.com/o/25063663.jpg?alt=media&token=4fa5ed8e-6a4f-48cb-a7d3-5f3eedc5693a"
            alt="home-page-image"
          />
        </Col_1_of_2>
      </Row>
    </div>
  );
};
