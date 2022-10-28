import {List, Datagrid, TextField, EditButton, Edit, SimpleForm, TextInput, Create, NumberField, useGetOne} from 'react-admin';

// const {data : name} = useGetOne('category', {id: record.category} );

export const listCategory = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            {/* <TextField source="price" /> */}
            <TextField source="description" />
            <TextField source="products"  />
            <TextField source="image" />
            {/* <NumberField source="quantity" /> */}

            <EditButton basePath="/category"/>
        </Datagrid>
    </List>
);

export const editCategory = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            {/* <TextInput source="price" /> */}
            <TextInput source="description" />
            <TextInput source="product" />
            <TextInput source="image" />
            {/* <TextInput source="quantity" /> */}
        </SimpleForm>
    </Edit>
)
export const createCategory = (props) => (
    <Create {...props}>
        <SimpleForm>
            {/* <TextInput setValue="0" source="id" /> */}
            <TextInput source="name" />
            {/* <TextInput source="price" /> */}
            <TextInput source="description" />
            <TextInput source="product" />
            <TextInput source="image" />
            {/* <TextInput source="quantity" /> */}
        </SimpleForm>
    </Create>
)
