export type Guitar = {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
}

/**
 * The selected code snippet demonstrates the use of TypeScript interfaces to define a new type called CartItem. The CartItem interface extends the Guitar type, which is a custom type representing a guitar with properties such as id, name, image, description, and price.
 *
 * The CartItem interface adds an additional property called quantity, which represents the quantity of the guitar item in the cart. This allows you to define a type that combines the properties of a Guitar and an additional quantity property, making it suitable for representing items in a shopping cart.
 *
 * In contrast, the code snippet provided in the "Code in the Open File" section (Lines 9-11) uses TypeScript's Pick utility type to define the CartItem type. The Pick utility type allows you to select specific properties from a given type and create a new type with those properties. In this case, the CartItem type includes the id, name, and price properties from the Guitar type, along with the quantity property. This approach provides a more concise and type-safe way to define the CartItem type compared to using an interface.
 *
 * Overall, both approaches demonstrate the ability to create a new type in TypeScript that combines properties from existing types and adds additional properties. The choice between using an interface or the Pick utility type depends on personal preference and the specific requirements of your project.
 */
export interface CartItem extends Guitar {
    quantity: number;
}

// This type represents a cart item, which includes the properties of a Guitar and an additional quantity property.
/*export type CartItem = Pick<Guitar, 'id' | 'name' | 'price'> & {
    quantity: number
};*/

