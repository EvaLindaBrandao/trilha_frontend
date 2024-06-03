import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

interface Props {
  rows: any[];
  columns: any[];
}

export default function DataTable({ rows,  columns}: Props) {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}

const CustomNoRowsOverlay = () => {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Typography variant="h6">Nenhum dado disponível</Typography>
      </Box>
    );
  };
  