import React from 'react'
import { connect } from 'react-redux'

import { GridList,GridListTile,GridListTileBar,IconButton } from '@material-ui/core/'
import InfoIcon from '@material-ui/icons/Info'


function GridListCategories (props){
    let categories = Object.values(props.categories);

    let setImages =(category)=>{
        switch (category){
            case 'react':
                return "https://cdn-images-1.medium.com/max/2000/1*HSisLuifMO6KbLfPOKtLow.jpeg"
            case 'redux':
                return "https://cdn-images-1.medium.com/max/1200/1*2dJ3D8gz4CVy3EtOJQNZvw.png"
            case 'udacity':
                return "https://roadtovrlive-5ea0.kxcdn.com/wp-content/uploads/2017/10/udacity-logo.png"
            default:
                return "http://energiaautomacao.com.br/wp-content/uploads/2018/04/sem-imagem-7.jpg"
        }
    }

    return(
        <div>
            <GridList cellHeight={300} >
                {
                    categories.map(category => (       
                        <GridListTile key={category.path} cols={ categories.length % 2 && categories.indexOf(category) === 0 ? 2 : 1 }>
                            <img 
                            src={ setImages(category.name) } 
                            alt={category.name} 
                            />
                            <GridListTileBar
                            title={category.name}
                            subtitle={<span>{category.path}</span>}
                            actionIcon={
                                <IconButton>
                                    <InfoIcon />
                                </IconButton>
                            }
                            />
                        </GridListTile>
                    ))
                }
            </GridList>
        </div>
    )  
}

function mapStateToProps ( categories ) {
    return categories 
}
    
export default connect(mapStateToProps)(GridListCategories)