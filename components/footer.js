import React from "react";
import styled from "styled-components";
import Content from "./content";

const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr 2fr 2fr;
  padding: 2rem 0 4rem;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const Heading = styled.h3`
  color: white;
`;

const FOOTER_ITEMS = [
  {
    title: "Company",
    listItems: [
      "About Us",
      "Board of Directors",
      "Careers",
      "Articles",
      "Patnerships",
      "Sitemap"
    ]
  },
  {
    title: "Support",
    listItems: [
      "Consumer Buying Process",
      "Cancellation & Refunds",
      "Customer Service",
      "Downloads",
      "Contact Us"
    ]
  },
  {
    title: "Legal",
    listItems: [
      "Whistleblower policy",
      "Public Disclosure",
      "Finance & Disclosures",
      "Privacy Policy",
      "Terms & Conditions",
      "Stewardship Code"
    ]
  }
];

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#000" }}>
      <Container className="wrapper">
        <div>
          <img
            src={"/static/images/ackoLogo.jpeg"}
            style={{ width: 48, height: "auto", marginLeft: "1rem" }}
          />
          <Content color={"#ddd"} regular size={"0.75rem"}>
            Acko General Insurance ltd.
          </Content>
          <Content
            color={"#bbb"}
            regular
            size={"0.6rem"}
            style={{ width: "80%", lineHeight: 1.5 }}
          >
            unit 301, 302, 3rd floor, F wing, Lotus corporate park, off western
            express highway, Jay coach, Goregaon East, Mumbai 400063
          </Content>
          <Content color={"#bbb"} regular size={"0.75rem"}>
            Email: hello@acko.com
          </Content>
          <Content color={"#bbb"} regular size={"0.75rem"}>
            Phone: 1860 266 2256
          </Content>
        </div>

        {FOOTER_ITEMS.map(({ title, listItems }) => (
          <div key={title}>
            <Content color={"#fff"} size={"0.7rem"} semibold>
              {title.toUpperCase()}
            </Content>

            {listItems.map(listItem => (
              <Content
                color={"#bbb"}
                regular
                size={"0.6rem"}
                key={listItem}
                margin={"0.75rem 1rem 0"}
              >
                {listItem}
              </Content>
            ))}
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Footer;
