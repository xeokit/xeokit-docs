import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "plugins/demo-openapi/swagger-petstore-yaml",
    },
    {
      type: "category",
      label: "Pets",
      items: [
        {
          type: "doc",
          id: "plugins/demo-openapi/schemas/cat",
          label: "Cat",
          className: "schema",
        },
        {
          type: "doc",
          id: "plugins/demo-openapi/add-pet",
          label: "Add a new pet to the store",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "plugins/demo-openapi/update-pet",
          label: "Update an existing pet",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "plugins/demo-openapi/get-pet-by-id",
          label: "Find pet by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "plugins/demo-openapi/update-pet-with-form",
          label: "Updates a pet in the store with form data",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "plugins/demo-openapi/delete-pet",
          label: "Deletes a pet",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "plugins/demo-openapi/upload-file",
          label: "uploads an image",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "plugins/demo-openapi/find-pets-by-status",
          label: "Finds Pets by status",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "plugins/demo-openapi/find-pets-by-tags",
          label: "Finds Pets by tags",
          className: "menu__list-item--deprecated api-method get",
        },
        {
          type: "doc",
          id: "plugins/demo-openapi/new-pet",
          label: "New pet",
          className: "api-method event",
        },
      ],
    },
    {
      type: "category",
      label: "Petstore Orders",
      items: [
        {
          type: "doc",
          id: "plugins/demo-openapi/get-inventory",
          label: "Returns pet inventories by status",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "plugins/demo-openapi/place-order",
          label: "Place an order for a pet",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "plugins/demo-openapi/get-order-by-id",
          label: "Find purchase order by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "plugins/demo-openapi/delete-order",
          label: "Delete purchase order by ID",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "plugins/demo-openapi/subscribe-to-the-store-events",
          label: "Subscribe to the Store events",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Users",
      items: [
        {
          type: "doc",
          id: "plugins/demo-openapi/create-user",
          label: "Create user",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "plugins/demo-openapi/get-user-by-name",
          label: "Get user by user name",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "plugins/demo-openapi/update-user",
          label: "Updated user",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "plugins/demo-openapi/delete-user",
          label: "Delete user",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "plugins/demo-openapi/create-users-with-array-input",
          label: "Creates list of users with given input array",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "plugins/demo-openapi/create-users-with-list-input",
          label: "Creates list of users with given input list",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "plugins/demo-openapi/login-user",
          label: "Logs user into the system",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "plugins/demo-openapi/logout-user",
          label: "Logs out current logged in user session",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
