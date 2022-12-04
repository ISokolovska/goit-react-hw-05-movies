import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const Header = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid #191970;
  box-shadow: 10px 2px 5px #191970;

  > nav {
    display: flex;
  }
`;

export const StyledNavLink = styled(NavLink)`
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 15px 10px;
  border-radius: 50px;
  text-decoration: none;
  color: #191970;
  font-weight: 700;
  font-size: 30px;
  text-transform: none;
  &.active {
    color: #40e0d0;
    background-color: #191970;
  }
`;

export const Trending = styled.h1`
  margin-top: 50px;
  margin-bottom: 50px;
  text-align: center;
  font-size: 35px;
  font-weight: 700;
`;

export const MovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px 30px;
  list-style: none;
`;

export const MovieTitle = styled.h2`
  margin: 0;
  width: 215px;
  font-size: 20px;
  line-height: 1.4;
  text-transform: none;
  color: black;
`;

export const MovieDate = styled.p`
  margin: 0;
  font-family: monospace;
  font-size: 18px;
  line-height: 1.3;
  color: grey;
`;

export const LinkGoBack = styled(Link)`
  margin-left: 50px;
  padding: 5px 10px;
  border: 2px solid grey;
  border-radius: 10px;
  text-decoration: none;
  font-size: 20px;
  color: black;
  text-decoration: none;
`;

export const ImageGoBack = styled.img`
  align-items: center;
  justify-content: center;
  padding-bottom: -25px;
`;

export const MovieInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-top: 50px;
`;

export const MoviePicture = styled.img`
  margin-left: 50px;
  margin-right: 100px;
`;

export const Additional = styled.h2`
  margin-left: 50px;
  margin-top: 50px;
`;

export const AdditionalItem = styled.li`
  margin-left: 50px;
  font-size: 25px;
`;

export const DetailsText = styled.p`
  font-size: 20px;
  font-weight: 400;
`;

export const NotFindTitle = styled.h2`
  margin: 0 auto;
  margin-top: 80px;
  text-align: center;
  font-size: 30px;
  line-height: 1.4;
`;
