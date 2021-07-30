import React, { Component } from "react";
import "./temp.css";

const storageData = JSON.parse(localStorage.getItem("data")) || [];

function getBrand(props) {
  const map = new Map();
  props.forEach((element) => {
    map.set(element.brand, true);
  });

  return map;
}

function getData(brand) {
  const data = storageData.filter((item) => {
    return brand.get(item.brand);
  });
  return data;
}

class RecentListPage extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      data: storageData,
      brand: getBrand(storageData),
    };
  }
  handleClick(name) {
    this.state.brand.set(name, !this.state.brand.get(name));
    this.setState(() => {
      return { ...this.state, data: getData(this.state.brand) };
    });
  }

  componentDidMount() {
    /*
    localStorage.setItem(
      "data",
      JSON.stringify([
        {
          title: "거의새것 정품 구찌 보스턴백 토트백",
          brand: "구찌",
          price: 380000,
          interest: false,
          id: 1,
          date: [new Date(2021, 6, 2)],
        },
        {
          title: "중고 루이비통 장지갑 백화점 풀구성",
          brand: "루이비통",
          price: 400000,
          interest: false,
          id: 2,
          date: [new Date(2021, 6, 3)],
        },
        {
          title: "중고 스톤아일랜드 쉐도우와팬 봄니트 95",
          brand: "스톤아일랜드",
          price: 350000,
          interest: false,
          id: 3,
          date: [new Date(2021, 6, 1)],
        },
        {
          title: "구찌 스트랩 클러치 판매합니다.",
          brand: "구찌",
          price: 30000,
          interest: false,
          id: 4,
          date: [new Date(2021, 6, 6)],
        },
      ])
    );
    let data = localStorage.getItem("data");
    */
    // console.log(getData(this.state));
  }

  render() {
    return (
      <div>
        <p>ProductPage</p>
        {Array.from(this.state.brand.entries()).map(([name, isChecked]) => (
          <div key={name}>
            <label>
              {name}
              <input
                type="checkbox"
                defaultChecked={isChecked}
                onChange={() => {
                  this.handleClick(name);
                }}
              />
            </label>
          </div>
        ))}
        <div className="data">
          {this.state.data.map((i) => (
            <ul key={i.id}>
              <li>{i.title}</li>
              <li>{i.brand}</li>
              <li>{i.price}</li>
              <li>{i.id}</li>
              <li>{i.date}</li>
            </ul>
          ))}
        </div>
      </div>
    );
  }
}

export default RecentListPage;
