import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import postStore from '../../store/postStore';
import styleSearch from '../../styles/SearcForm.module.scss';
import searchImg from '../../public/image/search.svg';
import Image from 'next/image'

const  SearchForm = observer(({load}) => {
    const [search, setSearch] = useState('')

    function hendleChange (e) {
        e.preventDefault(e)
        setSearch(e.target.value)
        postStore.setSearchPost(e.target.value)
    }

    function hendleSubmit (e) {
        e.preventDefault(e)
    }

    return(
        <div className={styleSearch.feed__searching}>
           <div>
               <form onSubmit={hendleSubmit} className={styleSearch.form_group} action="/search" method="GET">
                   <div className="icon-search">
                        <Image src={searchImg} width={25} height={25} />
                   </div>
                   
                    <input onChange={(e) => hendleChange(e)} type="text" name="keyword" placeholder="Enter a keyword..." value={search}/>
               </form>
               <h5 className="mt-4">
                  {load}
                </h5>
           </div>
       </div>
    )
})

export default SearchForm