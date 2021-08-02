import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import GroupIcon from '@material-ui/icons/Group';
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';
import CommentIcon from '@material-ui/icons/Comment';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import { useStyles } from './dashboardstyles'
import { Route,Switch,Link } from 'react-router-dom';
import Users from '../users/Users'
import AlbumsPhotos from '../albums-photos/AlbumsPhotos'
import PostsComments from '../posts-comments/PostComments'
import Stats from '../stats/Stats'




export default function PersistentDrawerLeft(props) {
  // console.log(props)
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  //  console.log(process.env)
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
   
   const handleLogout = () =>{
     localStorage.removeItem('token')
     alert('succefully logged out!')
     props.history.push('/')
   }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Welcome to Dashboard Rex!
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {[{text :'Stats', icon:<EqualizerIcon/>},{text :'Users', icon:<GroupIcon/>}, {text:'Albums',icon:<PhotoAlbumIcon/>}, {text :'Posts', icon:<CommentIcon/>}].map((ele, index) => (
            <Link key={index} to={`/dashboard/${ele.text}`.toLowerCase()} style={{textDecoration:'none'}}><ListItem button  className="mb-3">
              <ListItemIcon>{ele.icon}</ListItemIcon>
              <ListItemText primary={ele.text} />
            </ListItem></Link>
          ))}
          <Link onClick={handleLogout} to='/' style={{textDecoration:'none'}}><ListItem button key={'logout'} className="mb-3">
              <ListItemIcon>{<PowerSettingsNewIcon/>}</ListItemIcon>
              <ListItemText primary='Logout' />
            </ListItem></Link>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
         
        <Switch>
            <Route path="/dashboard/stats" component={Stats} exact={true}/>
            <Route path="/dashboard/users" component={Users} exact={true}/>
            <Route path="/dashboard/albums" component={AlbumsPhotos} />
            <Route path="/dashboard/posts" component={PostsComments}/>
        </Switch> 
      </main>
    </div>
  );
}
