import React, {Component} from 'react';

class Filter extends Component{
    constructor(){
        super();
        this.state = {
            filterBy:''
        }
    }

    evitarDefault(evento){
        evento.preventDefault();
        
    }

    controlarCambios(event){
        this.setState({
            filterBy: event.target.value
        }, () => this.props.filtrar(this.state.filterBy));
    }

    render(){
        return(
            <form action="" onSubmit={ (movies) => this.evitarDefault(movies) }>
                <input type="text" onChange={(movies)=> this.controlarCambios(movies) } value={this.state.filterBy} placeholder="Buscar..."/>
            </form>
        )
    }

}

export default Filter;