import { Box, ImageList, ImageListItem, Paper, Typography } from '@mui/material';
import React from 'react';

const Blog = () => 
(
    <>
        <Typography gutterBottom color="primary" variant="h3" align="center">Little Celebrations</Typography>
        <BlogPost />
    </>
);   
const montrealTripImages = 
[
    {
      img: 'https://lh3.googleusercontent.com/hzDUkxCScaCGxMel22VcldCK9eAu7E6d1IGqeK9PX9gGOkUEBsNOhHAUPy3p95bUGGXI3ExO42JEiFa_13CDLEwYRxwZPYb2072T2nN2TtgUGYufItlP-CdV8BTfXITGh-9Q_f4O7yk=w2400',
      title: 'Train card',
    },
    {
      img: 'https://lh3.googleusercontent.com/uff4EpH2oGnhsDe0fysHvXKSP-kmcXBCLa2J6YQf2-R9lTJnaPvl94xGG1kXcnR6anMIw6vzWQguPoyZFWX7RGYmmWSKYrdfDYXEH_ADligOEKLq1qWMJovR2vIxT0TCy_3wZT_ta8M=w2400',
      title: 'Art at train station'
    },
    {
      img: 'https://lh3.googleusercontent.com/qbplVVlpNkGmMGfUtQpt7cp3ees4HD8MB7CR5xtY0tCKEOU-QMXRRkz0B67Xa3SSWzeJ872Xq50I-0Y9k9Ikeuh3dSjnTFjIAXdqlplXj7ziUnc19y7WbjIfvbiPICOE8PtgVVELWNw=w2400',
      title: 'Dora looking dope on a train'
    },
    {
      img: 'https://lh3.googleusercontent.com/bkBCWhsC4y1izAb0ttQTxY5z-ljoz1_1iQvAe5U9tBu2lS9pE0V6oYS0tI0AOmzAjVpEVqMkENtJMNYvkPeHIk4y7XCEi9CbKvtguTD32ghzYRw7Gufn_T9W6C3EGYGHTAiQmBJNDqc=w2400',
      title: 'Pink flowers'
    },
    {
      img: 'https://lh3.googleusercontent.com/7h3XobKHZuSqRo60tcAuDzQV0q6vFmOKJlXUWCeZAQEyPOiMz4d-792AeKDuFuWMqsYHJ24rey9DTr3Toi-JTwizDhKli0HAYvFIR8LbpXqh_AHxBipIqDik4RhxO367wfWlVbSwMU8=w2400',
      title: 'Pink spider flower'
    },
    {
      img: 'https://lh3.googleusercontent.com/lqZ4TVj6JC7QeSfKX_oLhtzrZ4lyO0dMjt7qOCFRr2-kgaERM6GAK_tQq44nXyxhlhqZqrGdtk1n5RKGm7cN1Wg0YWPaOWLc7SIEPFd8NNQw3whb5SxWNfV75zwpobg1F28CZLNe8G4=w2400',
      title: 'Yet another pink flower'
    },
    {
      img: 'https://lh3.googleusercontent.com/RWFxYNRryHDc-Y_aLhSEr8Ekf4eWd34sTcROJpkj6nXbAWmM0L7tVLoPFKKJKM-1cDF5J3b_GYG68_ENplw5Tlw2PsD7QAGV8afXZwAyHThX8Km6mpiu0amLlsIq1fjFxt2uFGN8hOk=w2400',
      title: 'Garbage art hanging'
    },
    {
      img: 'https://lh3.googleusercontent.com/F3TmAatGkYLVa4dP9p-7B4o31cQAUshxwH3QzT6AvqxLlnkgy8QcdEkTIm7A0qhAsf8hfY1FFu8ffWGYPFOHHplGeZLkee-I1ZvNvRz_-fUSKzYfbC72DeC9Mmz0Tn_vf3PcacobKcM=w2400',
      title: 'Desert trees'
    },
    {
      img: 'https://lh3.googleusercontent.com/IKh0h5MaZ8wBdnNryJVCrwf2svZGNklLOqgspPKXRRMWXu7zE38_GcdlGzl2G8_AX9zABGAdq-C3zaMhe4nBV6D2JX3EvMnkGNQtCgnV7cl-_twj9sq5c0wfMQj_CljxdBx1FO56tmw=w2400',
      title: 'Well well well'
    },
    {
      img: 'https://lh3.googleusercontent.com/QK7U7cfSYQmPfIA22SsC7fmbSeRUcQ985FomeFC1KN9erRBwhULgw9hG4Xu6FNVuT6uQUa49Yw5RsXCFMmzCYmuiyMIYYLBU62p9B3hC4BI_ENEr8cEg-lpfkc83D6yGVNNPeVxtCWU=w2400',
      title: 'Bonsai tree'
    },
    {
      img: 'https://lh3.googleusercontent.com/TxWmEajd2Y69oH7l6TeMDxwZ9VcuoeC_fSvdsIDdHMR1Qb6kHRwgB-fAkUElKDXv8fkOH6HSjNsaLDbDlJ_vVG8NekVR0nsleyU3QTgTN5x1FJmaHEFkIYSS6QSO5v-_XgNNrJlgTPU=w2400',
      title: 'Hedge garden'
    },
    {
      img: 'https://lh3.googleusercontent.com/Uz6x3X-gqmAJiE7UWqnd1oLL2GNogS-OMmKF0MwI9YW3yexUucv9orVWSE4UK75J_eKGKoQhS6zvQLYtNECkno8n4H7us9rpKMX2BKikwTbLqV5VfE7HM5h1TX4j8xYJoW3ZkxSV2sw=w2400',
      title: 'Farris wheel'
    },
    {
      img: 'https://lh3.googleusercontent.com/wALVNaCbingJyO6c16g8Zo3Hr31J8S7qFuqz_fpzGi7m_Jz0NLkk0vKemWttO8O2iUM2u0nKpIcFpALpQ6T7vVfkbS0WGUMzATi9-TGShmjamp1Ub-F8At4wD3IJX39Ah56tKQhptSo=w2400',
      title: 'Ramen'
    },
    {
      img: 'https://lh3.googleusercontent.com/x0Kne3rgbEE0nuRwDxQK8vjK2EaHmFs0aV3uWXhQJUWZb8rfOg4uYqQHN2llBdUy44vYJmY3CcUc-4sIzqsmoeF-AiMJ8UwpQcPWl0T37ZLlMRu9VHIF2HZ6AQlFD-ZfKsaCpM0bVLs=w2400',
      title: 'Saint Joseph Oratory'
    },
    {
      img: 'https://lh3.googleusercontent.com/69w9xqgtJEVbG3jtMpDjd9noWaBCJa41RjL9WWGT5Xm0j6tG8Vc59K7I6jvInHTrjK4OUxvnyqWQJRQkRE7MU19nUUoIvY9jG9poq7uZ_Jz2FCaOSeitxjRdbRSWwlo680YzVBasf6w=w2400',
      title: 'Montreal from above'
    },
    {
      img: 'https://lh3.googleusercontent.com/Y-12arT2J_S43TMB0I3ZEpQu2XfRaGmycakYmOohmTz3fecngKiOyK4EAZ3FvN8Eeu1zowNO9Zeom3AkYB6HnK9fCM5rub8yO0ecn44nGDlfS91SlVWJQcetWu7a24akVg8LaIrExCc=w2400',
      title: 'Graffiti'
    }
];

const BlogPost = () => 
(
    <Paper elevation={4} style={{margin: '0 1em', padding: '1em'}}>
        <Typography gutterBottom variant="h6" color="secondary">Montreal with the Dee</Typography>
        <hr />
        <Box sx={{height: 450, overflowY: 'scroll' }}>
            <ImageList cols={3}>
            {montrealTripImages.map(item => (
                <ImageListItem key={item.img}>
                    <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                    />
                </ImageListItem>
            ))}
            </ImageList>
        </Box>
        <Typography gutterBottom variant="body1">
                I did things with Dora and they were nice
        </Typography>
    </Paper>
);

export default Blog;