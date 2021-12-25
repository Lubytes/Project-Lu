import { Typography } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import {OpenInNew} from '@mui/icons-material';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';

enum Versions {
    idea = 'Idea',
    inProgress = 'In Progress',
    done = 'Done'
};

const tools = 
[
    {title: "Cool Citation Tool", description: "Description of tool", version: Versions.idea},
    {title: "Cool Citation Tool2", description: "Description of tool", version: Versions.inProgress},
    {title: "Cool Citation Tool3", description: "Description of tool", version: Versions.done},
    {title: "Cool Citation Tool4", description: "Description of tool", version: Versions.idea},
    {title: "Cool Citation Tool5", description: "Description of tool", version: Versions.idea}
];

const Tools = () => 
(
    <>
        <Typography gutterBottom color="primary" variant="h3" align="center">Sack o&rsquo; Tools</Typography>
        <Typography gutterBottom color="secondary" variant="subtitle1" align="center">
            A list of tools provided to make life just a little bit more convienent
        </Typography>
        <Grid container justifyContent="center" rowSpacing={2}>
            {tools.map(tool => 
                (
                <Grid item md={6} key={tool.title}>
                    <ToolCardGenerator title={tool.title} description={tool.description} version={tool.version} />
                </Grid>
                )
            )}
        </Grid>
    </>
);  

type ToolCardProps = {
    title: string;
    version: Versions;
    description: string;
};

const ToolCardGenerator = ({title, version, description}: ToolCardProps) => 
(
    <Card variant="outlined" style={{margin: '0 1em'}}>
        <CardHeader
        title={title}
        subheader={<VersionChip version={version} />}
        action={
            <IconButton aria-label="open tool">
              <OpenInNew />
            </IconButton>
          }
      />
      <CardContent>
          <Typography>{description}</Typography>
      </CardContent>
    </Card>
);

type VersionChipProps = {
    version: Versions;
};

const VersionChip = (props: VersionChipProps) => {
    const {version} = props;
    return (
        version === Versions.idea ? <Chip label="Idea" color="primary"  /> : 
        version === Versions.inProgress ? <Chip label="In Progress" color="warning" /> :
        <Chip label="Done" color="success" />
    );
};


export default Tools;