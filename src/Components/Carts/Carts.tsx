import React, {useEffect,useRef} from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../Redux/store";
import qs from 'qs';
import { useNavigate } from "react-router-dom";
import cl from './Carts.module.scss'

import { sortObj } from "../ParamsToFil/Sort";
import { pizzaSelector } from "../../Redux/PizzaData/selectors";
import { filterSelector } from "../../Redux/Filter/selectors";
import { fetchPizza } from "../../Redux/AsyncThunk/FetchPizzaAsync";
import { setFilters } from "../../Redux/Filter/slice";
import CartSkeleton from "./CartSkeleton";
import Cart from "./Cart";



const Carts:React.FC = () => {
  const navigate = useNavigate();
  const {items, status} = useSelector(pizzaSelector)
  const {categoryId, sort, descOrAsc, searchValue, currentPage} = useSelector(filterSelector)
  const dispatch = useAppDispatch()
  const isMounted = useRef<boolean>(false);
  const isFSearch = useRef<boolean>(false);

  const fetchPizzas = async () =>{
    const categoryBy:string = categoryId > 0 ? `categories=${categoryId}`:'';
    dispatch(fetchPizza({
      categoryBy,
      sortBy: sort.sortBy,
      descOrAsc,
      searchValue,
      currentPage
    }))
    window.scrollTo(0,0); 
  }

  //если изменили параметры из урла
  useEffect(() =>{

    if(isMounted.current){
      let queryParams:string;
      if(searchValue === ''){
        queryParams = qs.stringify({
          sortBy: sort.sortBy,
          categoryId,
          currentPage,
          descOrAsc,
          
        })
      }else{
        queryParams = qs.stringify({
          sortBy: sort.sortBy,
          categoryId,
          currentPage: currentPage,
          descOrAsc:descOrAsc,
          searchValue
        })
      }
      navigate(`?${queryParams}`)
    }
    isMounted.current = true
  },[categoryId,sort.sortBy,descOrAsc,searchValue,currentPage]);

  ///Первый рендер проверка 
  useEffect(() =>{
    if(window.location.search){
      
      const params = qs.parse(window.location.search.substring(1));
      const sorting = sortObj.find(e => e.sortBy === params.sortBy)
      dispatch(setFilters({
        ...params,
        sorting
      }))
      isFSearch.current = true;
    }
  }, [])

  useEffect(() =>{
    if(!isFSearch.current){
      fetchPizzas()
    }
    isFSearch.current = false
  }, [categoryId,descOrAsc,currentPage,searchValue,sort.sortBy])

  const pizzas = items
                  .filter((e) => e.title.toLowerCase().includes(searchValue.toLowerCase()) ? true : false)
                  .map((e) => <Cart title={e.title} key={e.id} id={e.id} url={e.url} size={e.sizes} type={e.types} price={e.price}/>);
  
  const skeleton = [...new Array(4)].map((_,index:number) => <CartSkeleton key={index}/> ) ;


  
  return(
     <div className={cl.MenuCards}>
        {status === 'loading'
          ? skeleton
          :(status === 'Error')
          ?(<div className={cl.ErrorStatus}>
              <h4>Упс... Кажется ошибка <span>🤔</span> </h4>
              <p>Попробуйте зайти к нам позднее</p>
              </div>
          )
          :pizzas
        }
        </div>
);
};

export default Carts;
