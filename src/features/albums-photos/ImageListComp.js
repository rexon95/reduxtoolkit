import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: '100%',
    height: 500,
  },
}));




export default function ImageListComp(props) {
         
            const {photos : itemData} = props
            const {albums} = props
         
            const findTitle = (id) => {

              const data = albums.filter(album => {
                   return id === album.id
              })
              if(data[0] !== undefined){
              return data[0].title
              }
            }
        
  const classes = useStyles();
    return (
          <>
          {itemData[0] !== undefined && <><h1 className="mb-4 text-center">{findTitle(itemData[0].albumId)}</h1>
          <h4>Photos({itemData.length})</h4></>}
          <div className={classes.root}>
                 <ImageList rowHeight={160} className={classes.imageList} cols={3}>
                {itemData.map((item) => (
                  <ImageListItem key={item.id} cols={1}>
                    <img src={item.thumbnailUrl} alt={item.title} />
                  </ImageListItem>
                ))}
              </ImageList>
          </div></>

    )
}
