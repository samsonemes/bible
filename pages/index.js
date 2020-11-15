import React, { useState } from 'react';
//import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router';
//import useSWR from 'swr';

//fontawesome
import '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core'
import '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faSprayCan } from '@fortawesome/free-solid-svg-icons';



export default function Home({ notes }){
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const router = useRouter()


    const addNote = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("/api/notes", {
                method: "POST",

                headers: {
                    "Accept":"application/json",
                    "Content-Type": "application/json",
                },
                
                body: JSON.stringify({
                    title,
                    description
                })

            })

            setTitle("")
            setDescription("")

            router.push("/")
            
        } catch (error) {
            console.log(error)
        }

        


    }


    // const deleteNote = async (e, id) => {
    //     e.preventDefault(); 

    //     try {
    //         const res = await fetch(`/api/update/${id}`, {
    //             method: "DELETE",
    //             headers: {
    //                 "Accept":"application/json",
    //                 "Content-Type":"application/json"
    //             }
    //         })

    //         router.push("/")
            
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    //<span onClick={(e) => deleteNote(e, note._id)} className="absolute top-0 right-0 py-1 px-3 cursor-pointer hover:text-blue-800">X</span>
    


    const editNote = async (e, id) => {
        e.preventDefault(); 

        try {
            const res = await fetch(`/api/update/${id}`, {
                method: "PUT",
                headers: {
                    "Accept":"application/json",
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                        title, 
                        description
                    })
                
            })
            setTitle("")
            setDescription("")

            router.push("/")
            
        } catch (error) {
            console.log(error)
        }
    }

   
    return(
        <div className="mt-12">

        <div className="mb-6">
        <h2 className="text-center text-blue-300 text-xl font-serif">Share The Gospel </h2>
        </div>

        <form className="text-center mb-8">
        <input placeholder="your name..." value={title} onChange={(e) => setTitle(e.target.value)} className="border shadow-2xl px-10 py-1 mb-4 outline-none" type="text"/>
      
        <input placeholder="book chapter:verse ..." value={description} onChange={(e) => setDescription(e.target.value)} className="border shadow-2xl px-10 mb-4 py-1 outline-none" type="text"/>
        <br/>
        <button onClick={(e) => addNote(e)} className="bg-gray-600 ml-4 px-4 shadow-lg py-1 rounded-sm text-white m-1 font-semibold hover:bg-gray-900 ">Add <FontAwesomeIcon icon={faSprayCan}/></button>
        
        </form>

        <ul className="text-center">
        {notes.map((note) => {
            return(
                <div key={note._id} className="border mt-4 m-6 px-4 bg-gray-600 text-white relative">
                <span onClick={(e) => editNote(e, note._id)} className="absolute top-0 left-0 py-1 px-3"><FontAwesomeIcon icon={faEdit}/></span>
                
                <br/>
                <li className="font-bold mb-2 py-2 shadow-lg underline font-serif">{note.title}</li>
                <p className="shadow-2xl mt-2 py-4">{note.description}</p>
                <br/>
               
                </div>
            )
        })}
        </ul>

        </div>
    )
}

export async function getServerSideProps() {
    const res = await fetch("http://bible-scriptures.vercel.app/api/notes");
    const { data } = await res.json();

    return {
        props: {
            notes: data
        }
    }
}

