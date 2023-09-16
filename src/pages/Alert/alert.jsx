import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function FilledAlerts({purchaseID}) {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert variant="filled" severity="success">
        Gracias por compran en TECH!, su codigo de transaccion es: {purchaseID}
      </Alert>
    </Stack>
  );
}