import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useStyles, useStylesAccordian } from './postDetailsStyles';
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useSelector } from 'react-redux';

export default function PostDetails(props) {
    const classes = useStyles();
    const classesaccordian = useStylesAccordian()
    const {users} = useSelector(state=>state.usersData)
    const {posts} = useSelector(state=>state.postsData)
    const {comments} = useSelector(state=>state.commentsData)
    const handleBack = ()=>{
        props.history.push('/dashboard/posts')
    }

    const findPost = () =>{
        if(comments[0] !== undefined){
          const id = comments[0].postId
         
          const data = posts.filter((post)=>{
              return post.id === id
          })
          return data[0]
        }else{
            return {title:'',body:''}
        }
    }

    const findUser = () => {
        if(comments[0] !== undefined){
            const id = comments[0].postId
            const data = posts.filter((post)=>{
                return post.id === id
            })
            const user = users.filter(usr=>{
                return usr.id === data[0].userId
            })
            return user[0]
          }else{
            return {name:'',email:''}
        }
    }
    return (
        <div>
           <button className='btn btn-warning text-dark mb-3' onClick={handleBack}>Back to PostsList</button>
                <Card className={classes.root} variant="standard">
                    <CardContent>
                            <label className={classes.pos}>
                            post :
                            </label>
                            <Typography variant="h4" component="h2" style={{borderBottom:'1px solid blue'}}>
                             {findPost().title}
                            </Typography><br/>
                            <Typography variant="body2" component="p">
                            {findPost().body}
                            <br /><br />
                             <span>PostedBy : {findUser().name}</span><br/>
                             <span>Contact : {findUser().email}</span>
                            </Typography>
                    </CardContent>
            </Card>
            <h3 className="mt-4">Comments : </h3>
            <div className={classesaccordian.root}>
                     {comments.map((comment,i)=>{
                        
                         return  <Accordion key={i}>
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        >
                                        <Typography className={classesaccordian.heading}>Comment {i+1}</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        <Typography>
                                            {comment.body}<br/><br/><b>commentBy</b> : {comment.name}<br/><b>contact</b> : {comment.email}
                                        </Typography>
                                        </AccordionDetails>
                                </Accordion>



                     })} 
                        </div>
        </div>
    )
}
