import {
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { Product, ProductInputs } from "src/types/Product";

type ProductFormProps = {
  product?: Product;
  onSubmit: (value: ProductInputs) => void;
};

function ProductForm({ onSubmit, product }: ProductFormProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ProductInputs>();

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack gap={3}>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <TextField />
          </FormControl>
          <FormControl>
            <FormLabel>Image</FormLabel>
            <TextField />
          </FormControl>
          <FormControl>
            <FormLabel>Price</FormLabel>
            <TextField />
          </FormControl>
          <FormControl>
            <FormLabel>Description</FormLabel>
            <TextField multiline rows={4} />
          </FormControl>
          <FormControlLabel
            control={
              <Controller
                name="isShowProduct"
                control={control}
                render={({ field }) => <Checkbox {...field} />}
              />
            }
            label="Show Product"
          />
          <FormControl variant="standard">
            <InputLabel>Category</InputLabel>
            <Controller
              name="category"
              control={control}
              defaultValue={product?.category || ""}
              render={({ field }) => (
                <Select {...field}>
                  <MenuItem value={"1"}>Hp</MenuItem>
                  <MenuItem value={"2"}>Apple</MenuItem>
                  <MenuItem value={"3"}>Dell</MenuItem>
                </Select>
              )}
            />
          </FormControl>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Stack>
      </form>
    </Container>
  );
}

export default ProductForm;
