import * as React from 'react';
import { styled } from '@mui/material/styles';
import { GoDotFill } from 'react-icons/go';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import styles from './accordion.module.css';

const accordionData = [
  {
    panel: 1,
    title: 'How can I change Password',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
    dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
    lacus ex, sit amet blandit leo lobortis eget.`,
  },
  {
    panel: 2,
    title: 'How can I change Password',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
    dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
    lacus ex, sit amet blandit leo lobortis eget.`,
  },
  {
    panel: 3,
    title: 'How can I change Password',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
    dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
    lacus ex, sit amet blandit leo lobortis eget.`,
  },
  {
    panel: 4,
    title: 'How can I change Password',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
    dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
    lacus ex, sit amet blandit leo lobortis eget.`,
  },
];

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  '&::before': {
    display: 'none',
  },
  backgroundColor: '#1F1D2B',
  color: 'white',
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={
      <GoDotFill
        style={{
          color: '#C896EF',
        }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: '#302E3D',
  borderRadius: '5px',
}));

export function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>('');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      {accordionData.map((item) => (
        <Accordion
          expanded={expanded === `panel${item.panel}`}
          onChange={handleChange(`panel${item.panel}`)}
          sx={{
            borderBottom: '1px solid #272533',
          }}
        >
          <AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
            <Typography className={styles.title}>{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={styles.description}>
              {item.description}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
