import { useState } from "react";
import { GlobalStyles } from "./GlobalStyles/GlobalStyles";
import Header from "./components/header/Header";
import { StyledFilterDiv } from "./components/header/header.styles";
import User from "./components/users/User";
import { USERS } from "./constants/users";

const App = () => {
  const [showActiveOnly, setShowActiveOnly] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [alphaOrder, setAlphaOrder] = useState("default");
  const [filteredUsers, setFilteredUsers] = useState(USERS);

  const switchShowActiveOnly = () => {
    setShowActiveOnly((status) => !status);
    filterAndSortUsers(!showActiveOnly, searchValue, alphaOrder);
  };

  const inputFilterChange = (event) => {
    const newValue = event.target.value;
    setSearchValue(newValue);
    filterAndSortUsers(showActiveOnly, newValue, alphaOrder);
  };

  const alphabeticFilter = (event) => {
    const newOrder = event.target.value;
    setAlphaOrder(newOrder);
    filterAndSortUsers(showActiveOnly, searchValue, newOrder);
  };

  const filterAndSortUsers = (activeOnly, search, order) => {
    const filtered = USERS.filter((user) => {
      const activeFilter = activeOnly ? user.active : true;
      const searchFilter = user.name.toLowerCase().includes(search.toLowerCase());
      return activeFilter && searchFilter;
    });

    const ordered = filtered.slice().sort((a, b) => {
      if (order === "name") {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });

    setFilteredUsers(ordered);
  };

  return (
    <>
      <GlobalStyles />
      <Header />
      <StyledFilterDiv>
        <input
          onInput={inputFilterChange}
          placeholder="Escribe el nombre a buscar"
          type="text"
        />
        <p>
          Solo activos{" "}
          <span>
            <input
              onChange={switchShowActiveOnly}
              type="checkbox"
              name=""
              id=""
            />
          </span>
        </p>
        <select value={alphaOrder} onChange={alphabeticFilter} name="" id="">
          <option value="default">Por defecto</option>
          <option value="name">Por Nombre</option>
        </select>
      </StyledFilterDiv>
      {filteredUsers.map((user) => (
        <User
          key={user.userId}
          img={user.profileImage}
          name={user.name}
          username={user.username}
          active={user.active}
        />
      ))}
    </>
  );
};

export default App;