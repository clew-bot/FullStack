import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import "./Coins.css";

import {
  Button,
  Container,
  Table,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
} from "reactstrap";

// Component imports
import PaginationBar from "../../../PaginationBar";
import LoadingSpinner from "../../../LoadingSpinner";

const CoinDetails = () => {
  const [coins, setCoins] = useState([]);
  const [paginatedValue, setPaginatedValue] = useState(1); // allow pagination
  const [isLoading, setIsLoading] = useState(false);
  const [cryptoName, setCryptoName] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCryptoName({ ...cryptoName, [name]: value.replace(" ", "-") });
    console.log(cryptoName);
  };

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);
      const { data } = await axios.get(
        `${process.env.REACT_APP_COINDETAILS_URL_ONE}${paginatedValue}${process.env.REACT_APP_COINDETAILS_URL_TWO}`
      );
      setCoins(data);
      setIsLoading(false);
    };
    fetch();
  }, [paginatedValue]);

  const paginate = (val) => {
    setPaginatedValue(val);
  };

  return (
    <Container className="coins_container">
      {isLoading && <LoadingSpinner />}
      <Container>
        <h1>Coin Details</h1>
        <Link to="/">
          <Button>Go Home</Button>
        </Link>
        <InputGroup>
          <InputGroupAddon addonType="append">
            <Input
              onChange={handleInputChange}
              name="crypto"
              placeholder="Enter Any Crypto"
            />
            <Link to={`/coin/${cryptoName.crypto}`}>
              <Button>To The Moon</Button>
            </Link>
          </InputGroupAddon>
        </InputGroup>
        <PaginationBar
          setPagination={paginate}
          nums={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        />
      </Container>
      <Table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Coin</th>
            <th>Current Price</th>
            <th>Market Cap Rank</th>
            <th>Get More Insights</th>
          </tr>
        </thead>
        <tbody>
          {coins &&
            coins.map((coin) => {
              return (
                <tr key={coin.id}>
                  <td className="coin-symbol">
                    <span>{coin.symbol}</span>
                  </td>
                  <td className="coin-dat">
                    <div>
                      <img src={coin.image} alt={coin.id} />
                      {coin.id}
                    </div>
                  </td>
                  <td className="coin-price">
                    <span>$ {coin.current_price.toFixed(2)}</span>
                  </td>
                  <td className="coin-market">
                    <span>{coin.market_cap_rank}</span>
                  </td>
                  <td className="coin-link">
                    <div>
                      <Link to={`/coin/${coin.id}`}>
                        <Button color="primary">See more</Button>
                      </Link>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </Container>
  );
};

export default CoinDetails;
