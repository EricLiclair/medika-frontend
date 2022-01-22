<script>
    import TableRow from './TableRow.svelte';
	let products=[];
    let url = 'https://port-8000-mdkbzr-diliga8356426146.codeanyapp.com/api/v1/search/Atriplex/';
    fetch(url).then((res) => res.json()).then((data) => {
        console.log(data)
        products = [...data]
    })
</script>

<main>
    <table style="text-align: left; border: solid 1px black;">
        <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Tools</th>
        </tr>
    {#each products as product (product.id)}
        <TableRow {product}/>
    {/each}
    </table>
</main>

<style>
    table {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 60%;
    }

    table th {
    border: 1px solid #ddd;
    padding: 8px;
    }

    table th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #04AA6D;
    color: white;
    }
	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>