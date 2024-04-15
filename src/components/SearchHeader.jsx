import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import YouTubeIcon from '@mui/icons-material/YouTube';

import { useAuthContext } from "../context/AuthContext";
import { Grid } from "@mui/material";

export default function SearchHeader() {
  const dropdownItemStyle = {
    borderBottom: '1px solid lightgray',
    margin: '0 10px',
    padding: '8px 16px',
    cursor: 'pointer',
    color: 'lightcoral',
    transition: 'color 0.5s',
  }
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  }

  const handleMenuItemClick = (selectedItem) => {
    setText(selectedItem);
    setShowDropdown(false);
  }

  const handleNavigateToHome = () => {
    navigate('/');
  };

  useEffect(() => {
    setText(keyword || '');
  }, [keyword]);

  const { user, logout } = useAuthContext();

  return (
    <Stack direction="row" spacing={2} sx={{ alignItems: 'center', flex: 1, justifyContent: "space-between", margin: '0 20px' }}>
      <Grid container>
        <Grid item xs={3}>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <Typography variant="h5" color='error' sx={{ fontWeight: 'bold', cursor: 'pointer', fontSize: 50 }} onClick={handleNavigateToHome}>
              <Stack direction="row" spacing={1} alignItems="center">
                <YouTubeIcon style={{ paddingBottom: '10px', marginLeft: '2px', fontSize: 60 }} color="error" fontSize="large" />
                Youtube
              </Stack>
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Paper
            component="form"
            onSubmit={handleSubmit}
            sx={{ marginLeft: '650px', p: '10px 0px 10px 10px', display: 'flex', alignItems: 'center', position: 'relative', width: 400 }}
          >
            <IconButton sx={{ p: '10px' }} aria-label="menu" onClick={() => setShowDropdown(!showDropdown)}>
              <MenuIcon />
            </IconButton>
            {showDropdown && (
              <div style={{ position: 'absolute', top: '100%', zIndex: 1, backgroundColor: 'rgba(255, 255, 255, 0.76)', boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)', borderRadius: 10, border: '2px solid darkgray', padding: '5px 0', display: 'flex', flexDirection: 'column' }}>
                <div style={dropdownItemStyle} onClick={() => { handleMenuItemClick('교육'); setShowDropdown(false); }}>교육</div>
                <div style={dropdownItemStyle} onClick={() => { handleMenuItemClick('문화'); setShowDropdown(false); }}>문화</div>
                <div style={dropdownItemStyle} onClick={() => { handleMenuItemClick('음악'); setShowDropdown(false); }}>음악</div>
                <div style={dropdownItemStyle} onClick={() => { handleMenuItemClick('강연'); setShowDropdown(false); }}>강연</div>
                <div style={dropdownItemStyle} onClick={() => { handleMenuItemClick('인물'); setShowDropdown(false); }}>인물</div>
                <div style={dropdownItemStyle} onClick={() => { handleMenuItemClick('게임'); setShowDropdown(false); }}>게임</div>
                <div style={dropdownItemStyle} onClick={() => { handleMenuItemClick('먹방'); setShowDropdown(false); }}>먹방</div>
                <div style={dropdownItemStyle} onClick={() => { handleMenuItemClick('아동'); setShowDropdown(false); }}>아동</div>
                <div style={{ ...dropdownItemStyle, border: '0' }} onClick={() => { handleMenuItemClick('개그'); setShowDropdown(false); }}>개그</div>
              </div>
            )}
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="검색"
              value={text}
              onChange={e => setText(e.target.value)}
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Grid><Grid item xs={3}>
          <Stack direction='row' spacing={1} justifyContent='right' alignItems='center'>
            {user && <Link to='/videos/record'>시청기록</Link>}
            {user && user.photoURL && <p><img src={user.photoURL} alt={user.displayName} height='32' style={{ borderRadius: 100 }} /></p>}
            {user && user.displayName && <p>displayName={user.displayName}</p>}
            {user && <button onClick={logout}>로그아웃</button>}
            {!user && <Link to='/signUp'>로그인</Link>}
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  )
}