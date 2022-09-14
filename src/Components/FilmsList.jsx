import React from 'react'
import MovieCard from './MovieCard.jsx';




class FilmsList extends React.Component {
    constructor(props){
        super(props)

   
        this.state ={
            list: []
        }

        this.getFlims = this.getFlims.bind(this)
    }


    componentDidMount(){
        this.getFlims();
    }

    

    getFlims(){
        fetch(`https://ghibliapi.herokuapp.com/films`)
        .then((res) => res.json())
        .then((list) => this.setState({ list }))
        .catch((err) => console.log(err))

        

    }
  render() {
    return <div className='movieList container'>
        {
            this.state.list.map(items =>{
                return <MovieCard
                 title={items.title}
                  img={items.image}
                  description={items.description}
                  director={items.director}
                  />
            })
        }
        </div>
  }

 
}

export default FilmsList