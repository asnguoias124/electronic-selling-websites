import {List, Datagrid, TextField, EditButton, Edit, SimpleForm, TextInput, Create, NumberField, useGetOne} from 'react-admin';


export const listProduct = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="price" />
            <TextField source="description" />
            <TextField source="category"/>
            <TextField source="image" />
            <NumberField source="quantity" />

            <EditButton basePath="/product"/>
        </Datagrid>
    </List>
);

export const editProduct = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <TextInput source="price" />
            <TextInput source="description" />
            <TextInput source="category" />
            <TextInput source="image" />
            <TextInput source="quantity" />
        </SimpleForm>
    </Edit>
)
export const createProduct = (props) => (
    <Create {...props}>
        <SimpleForm>
            {/* <TextInput setValue="0" source="id" /> */}
            <TextInput source="name" />
            <TextInput source="price" />
            <TextInput source="description" />
            <TextInput source="category" />
            <TextInput source="image" />
            <TextInput source="quantity" />
        </SimpleForm>
    </Create>
)


