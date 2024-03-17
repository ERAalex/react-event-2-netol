import React, {Component} from "react";
import { IconSwitch } from "./IconSwitch.jsx"

import productsData from "../components/products-data.jsx"
import CardsView from "./ShopView/CardsView/CardsView.jsx"
import {ListView} from "./ShopView/ListView/ListView.jsx"


export default class Store extends Component {
    // by default start with view_list, than can switch to view_module
    state = {view: "view_list"};

    onSwitchView = (filter) => {
        console.log('--view selected--')
        // смотрим по какому элементу был клик и достаем текстовое значение кнопки
        const selectedFilter = filter.target.textContent;

        // изменить состояние поменять на активный фильтр и изменить выдачу в projectsData
        if (selectedFilter == "view_list") {
            this.setState({view: "view_module"})
        } else {
            this.setState({view: "view_list"})
        }
    }

    render() {
        return (
            <>
            <IconSwitch icon={this.state.view} onSwitchView={this.onSwitchView}/>
            {
                (this.state.view == "view_module") ? <CardsView items={productsData}/> : <ListView items={productsData}/>
            }
          
        </>
        )
}}

