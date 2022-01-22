<script>
    export let product = {
        name: 'Product Name',
        price: 100.00,
        quantity: 100
    }

    let updatedProduct = {
        name: "hello",
        price: null,
        quantity: null,
    }

    let editable = false;
    const toggle_editable = () => {
        editable = !editable;
    }

    const updateProduct = (e, type) => {
        switch(type) {
            case 'name':
                updatedProduct.name = e.target.value;
                break;
            case 'price':
                // code block
                break;
            case 'quantity':
                // code block
                break;
            }
        
    }
</script>

<tr on:click={() => {editable = true;}}>
    <td on:input={(e) => updateProduct(e,'name')} contenteditable={editable}>{product.name}</td>
    <td contenteditable={editable}>{product.price}</td>
    <td contenteditable={editable}>{product.quantity}</td>
    {#if editable}
        <td ><button>save</button><button on:click={(e) => {e.stopPropagation(); toggle_editable();}}>cancel</button></td>
    <!-- {:else}
        <td ><button>edit</button></td> -->
    {/if}
    <td>{updatedProduct.name}</td>
</tr>

<style>
    button {
        margin: 10px;
    }
    tr {
    border: 1px solid #ddd;
    }

    tr:nth-child(even){background-color: #f2f2f2;}

    tr:hover {background-color: #ddd;}
</style>