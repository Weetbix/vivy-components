import React from "react";
import ThemeStyles from "./themeColors.style";
import ColorBox from "./ColorBox";
import FlexGrid from "../grid/FlexGrid";
import Row from "../grid/Row";
import Col from "../grid/Col";

export default function ThemeColors() {
  return (
    <FlexGrid>
      <ThemeStyles>
        <div className="color-container">
          <Col>
            <div>
              <h2>Colors</h2>
              <Row>
                <ColorBox description="Brand Primary" color="#03D4BF" />
                <ColorBox description="Brand Alternative" color="#00BFAC" />
                <ColorBox description="Brand Destructive" color="#EB5A47" />

                <ColorBox description="Background Primary" color="#f5f5f5" dark />
                <ColorBox description="Background Secondary" color="#FAFAFA" dark />
                <ColorBox description="Background Brand" color="#F8F7F5" dark />


                <ColorBox description="Text Primary" color="#353F41" />
                <ColorBox description="Text Secondary" color="#7b7b7b" />
                <ColorBox description="Text Inactive" color="#bfbfbf" />
                <ColorBox description="Divider" color="#e0e0e0" dark />
              </Row>
            </div>
            <div>
              <h2>Gradient</h2>
              <Row>
                <ColorBox
                  description="Positive"
                  gradient="linear-gradient(180deg,#34de95,#14cfc1)"
                />
                <ColorBox
                  description="Neutral"
                  gradient="linear-gradient(180deg,#ffe071,#ffa97c)"
                />
                <ColorBox
                  description="Negative"
                  gradient="linear-gradient(180deg,#ff7676,#f54ea2)"
                />
                <ColorBox
                  description="Inactive"
                  gradient="linear-gradient(180deg,#cccbd0,#bcbbc1)"
                />
              </Row>
            </div>
          </Col>
        </div>
      </ThemeStyles>
    </FlexGrid>
  );
}
