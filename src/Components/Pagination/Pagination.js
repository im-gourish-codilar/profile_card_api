import React, { useState, useEffect } from 'react'
import prev from '../files/left.svg';
import next from '../files/right.svg';
import '../scss/app.scss'

export default function Pagination({ setstate }) {
    // state = { pages: [], records: [], currentpage: 1 };
    const [page, setPage] = useState([]);
    //     const [record, setRecord] = useState([]);
    //     const [currentpage, setCurrentpage] = useState(1);
    useEffect(() => {
        fetch('https://reqres.in/api/users')
            .then(response => response.json())
            .then(
                data => {
                    const arry = [];
                    for (let index = 1; index <= data.total_pages; index++) {
                        arry.push(index);
                    }
                    // this.setState({ pages: arry })
                    setPage(arry);
                })
            .catch(error => {
                console.error('Error:', error);
            }, []);

    })
    //     const prev = () => {
    //         if (currentpage === 2) {
    //             console.log(currentpage);
    //             // let p = this.state.currentpage - 1;
    //             let p= setCurrentpage(currentpage-1);
    //             fetch(`https://reqres.in/api/users?page=${p}`)
    //                 .then(response => response.json())
    //                 .then(
    //                     data => {
    //                         console.log(data.data);
    //                         // this.setState({ currentpage: p });
    //                         setCurrentpage(p);

    //                         console.log(currentpage);

    //                     })
    //                 .catch(error => {
    //                     console.error('Error:', error);
    //                 });
    //         }
    //     }
    //     const next = () => {
    //         if (currentpage === 1) {
    //             console.log(currentpage);
    //             // let c = this.state.currentpage + 1;
    //             let c= setCurrentpage(currentpage + 1);
    //             fetch(`https://reqres.in/api/users?page=${c}`)
    //                 .then(response => response.json())
    //                 .then(
    //                     data => {
    //                         console.log(data.data);
    //                         // this.setState({ currentpage: c });
    //                         setCurrentpage(c);
    //                         console.log(currentpage);

    //                     })
    //                 .catch(error => {
    //                     console.error('Error:', error);
    //                 });
    //         }
    //     }
    // const changeContent = (evt) => {
    //     fetch(`https://reqres.in/api/users?page=${evt.target.value}`)
    //         .then(response => response.json())
    //         .then(
    //             data => {
    //                 console.log(data.data);
    //                 // this.setState({ currentpage: parseInt(evt.target.value) });
    //                 setCurrentpage(parseInt(evt.target.value));
    //                 console.log(currentpage);

    //             })
    //         .catch(error => {
    //             console.error('Error:', error);
    //         });
    // }


    // const [page,setPage] =  useState([]);

    // const getUsers= async() =>{
    //     const response = await fetch('https://reqres.in/api/users');
    //     const data = await response.json();
    //     setPage (data.total_pages);
    //     // console.log(data);

    // } 

    // useEffect(() => {

    //   getUsers();

    // },[])

    const changeContent = (evt) => {
        let val = evt.target.value;
        // console.log(val);
        setstate(val);

    }

    return (
        <>
            <div className='pages'>
                <button className='btnl'>
                    <img src={prev} />
                </button>
            </div>
            {/* <button onClick={prev}>prev</button> */}
            {page.map((id) =>
                <button className='pagecount' key={id} value={id} onClick={changeContent} >{id}</button>
                // <button key={id} value={id} >{id}</button>
            )}
            {/* <button onClick={next}>next</button>  */}
            <div className='pages'>
                <button className='btnl'>
                    <img src={next} />
                </button>
            </div>
        </>
    )
}




