<script>
  // AspireInputTable.svelte
  // A table of fields and/or elements taken from a list of objects and formatted according to
  // a list of column instructions.
  //
  //   import MDBIcon from "mdbsvelte/src/MDBIcon.svelte";
  import AspireButton from "./AspireButton.svelte";
  export let id = "";

  // allRows - a list of objects, one per row. Instructions for each colummn are in the input
  // cols and describe how to pluck and format information from a row in all Rows.
  export let allRows = [];
  // cols is a list of objects that each describe how to deal with part of a row object in order to
  // properly render it in the table.ach of which selects an element from an object in allRows. The column can
  // also be a svelte component that is rendered in the cell, and used to display and/or set values into
  // the row object that it represents.
  //
  //  col.isNotSortable :  The input table is built with sortable columns by default.  Set this to
  //                       mark a column not sortable.
  //  col.label : Text to use for the column header
  //  col.hoverText : Hover text for the column.
  //  col.subObj :  The name of the element within a row that represents this column. Optional. If
  //                this is set, the "Description" element of the subobject will show in the
  //                hovertext of this grid entry.
  //  col.display : Name of the element from this row, the value of which will be shown in the
  //                row/col cell.
  //  col.sortElement : Name of the element from this row to be sorted on when so specified. If not given,
  //                    and column is marked sortable, col.display is used.
  //  col.args: Used if the cell is to contain a svelte component based on an element in the row object. Note that the
  //            object must have the bindable property "value":
  //      col.args.component: Name of the svelte component
  //      col.args.props : Properties passed through to the component
  //      col.args.bind : Name of the element in the row object that is bound to the returned value of the component.
  //      col.args.idElement: Name of the element in the row object that uniquely identifies it with those with the same
  //                          prefix.
  //      col.args.idPrefix: Prefix for unique Identifier.
  //       idPrefix + value of idElement can be used to uniquely identify the DOM for the entry, which then can be mapped
  //       back to the object.
  //
  export let cols = [];
  // Set the column index by which the rows are initially to be ordered. Defaults to 0.
  export let initialOrderCol = 0;
  // Default sort to descending, (highest first)
  export let initialOrderAscending = false;

  // title is shown on the table.
  export let title = "";

  export let trueFalse = { true: "on", false: "off" };
  // Element name for determining whether to show each row.
  //
  export let showElement;

  export let hoverText;
  // Allow user to provide a string that identifies an element in each row object by name.  That
  // element must be a function to call to determine whether that row is to be displayed.
  export let filterRowFn = "isValid";
  // Argument list passed to the above function.
  export let filterRowArgs = [];
  //
  export let headerClass = "font-bold";
  // If the user specified a sub element to check (showElement), check that Element of the
  // given row against the given true/false values and return result.
  // If not, return true unless the displayVal is '*None*'
  function showRow(row) {
    if (showElement) {
      if (showElement == "all") {
        return true;
      }
      if (row[showElement] == trueFalse[true]) {
        return true;
      }
      return false;
    }
    // Otherwise check to see if the caller specified an element for the filter
    // function.  If so, call it to check if we should show the row.
    // Otherwise, show the row unconditionally.
    else {
      if (filterRowFn) {
        if (row[filterRowFn](filterRowArgs)) {
          return true;
        } else {
          return false;
        }
      }
      return true;
    }
  }
  // Holds table sort state. Initialized to unsorted by virtue of the "col" element not being set.

  let sortState = { ascending: initialOrderAscending };
  function sortem(column) {
    // If the current state is sorted, and by the same column by which we have
    // been asked to sort, just change the ascending parameter to a possibly new value.
    if (!sortState.col) {
      // Not sorted at all.  Initial state exists.
      sortState.col = column;
      sortState.ascending = initialOrderAscending;
    } else {
      // We already sorted. If it was on this column, flip the ascending flag.
      if (sortState.col == column) {
        sortState.ascending = !sortState.ascending;
      }
      // We already sorted. If it was NOT on this column, set the column to the new
      // column and initialize the ascending flag to the setting asked for.
      else {
        sortState.col = column;
        sortState.ascending = initialOrderAscending;
      }
    }
    // sortElementName is the element in each row on which to sort. Not necessarily the same
    // as what is displayed, but that is the default if one is not specified.
    let sortElementName = sortState.col.display;
    if (sortState.col.sortElement) {
      sortElementName = sortState.col.sortElement;
    }
    // Modifier to sorting function for ascending or descending, set from current state.
    let sortModifier = sortState.ascending ? 1 : -1;

    let sortFn = (a, b) =>
      a[sortElementName] < b[sortElementName]
        ? -1 * sortModifier
        : a[sortElementName] > b[sortElementName]
          ? 1 * sortModifier
          : 0;

    allRows = allRows.sort(sortFn);
  }
  // Function to set hover text for grid item in table. Allows the caller to set a
  // reference to an object contained by the row object to be used for the column.
  function getItemHoverText(row, col) {
    if (col.subObj) {
      if (row[col.subObj]) {
        return row[col.subObj].Description;
      }
    }
    return "";
  }
  function nextSortState(input = "none") {
    // If this is not the column currently sorted on, return the
    // default sort order. The sortem function will recognize the column
    // as unsorted and choose the default or input setting.
    if (input == "default") {
      if (initialOrderAscending) {
        return "ascending";
      } else {
        return "descending";
      }
    }
    // Table is currently sorted by the column. Next sort will flip it.
    if (sortState.ascending) {
      return "descending";
    } else {
      return "ascending";
    }
  }
  function currentSortState(input = "none") {
    let state = sortState.ascending;
    if (input == "default") {
      state = initialOrderAscending;
    }
    if (state) {
      return "ascending";
    } else {
      return "descending";
    }
  }
  function nextSortIcon(input = "none") {
    // If this is not the column currently sorted on, return the
    // icon for the default sort order.
    if (input == "default") {
      if (initialOrderAscending) {
        return "sort-up";
      } else {
        return "sort-down";
      }
    }
    // Table is currently sorted by the column. Next sort will flip it.
    if (sortState.ascending) {
      return "sort-down";
    } else {
      return "sort-up";
    }
  }
  // Sort the rows by the requested initial input column number.
  sortem(cols[initialOrderCol]);
</script>

<!-- Make a table with a header, and then a row for each item in allRows.-->
<div class="multiselect" title={hoverText} {id}>
  {title}
  {#if allRows && allRows.length > 0}
    <table class="flex-1 md:flex-1">
      <tr>
        {#each cols as col}
          {#if col.isNotSortable}
            <th title={col.hoverText}>
              <!-- svelte-ignore a11y-missing-attribute -->
              <a class={headerClass}>{col.label}</a>
            </th>
          {:else}
            <!-- The image shown on the column changes when the row gets sorted, need this Key to force svelte to rerender the column headers to show the new icon.-->
            {#key allRows}
              {#if sortState.col == col}
                <th
                  title={col.hoverText +
                    " - Table is currently sorted on this column in " +
                    currentSortState() +
                    " order. Click to Sort on this column in " +
                    nextSortState() +
                    " order."}
                  on:click={sortem(col)}
                >
                  <!-- svelte-ignore a11y-missing-attribute -->
                  <div class="container {headerClass}">
                    <div>
                      {col.label}
                    </div>
                    <div>
                      #
                      <!-- <MDBIcon icon={nextSortIcon()} /> -->
                    </div>
                  </div>
                </th>
              {:else}
                <th
                  title={col.hoverText +
                    " -Table is currently not sorted on this column. Click to Sort on this column in " +
                    nextSortState("default") +
                    " order."}
                  on:click={sortem(col)}
                >
                  <!-- svelte-ignore a11y-missing-attribute -->
                  <div class="container {headerClass}">
                    <div>
                      {col.label}
                    </div>
                    <div>
                      #
                      <!-- <MDBIcon icon={nextSortIcon("default")} /> -->
                    </div>
                  </div>
                </th>
              {/if}
            {/key}
          {/if}
        {/each}
      </tr>
      {#each allRows as row}
        {#if showRow(row)}
          <tr>
            {#each cols as col}
              <td title={getItemHoverText(row, col)}>
                {#if col.args}
                  <svelte:component
                    this={eval(col.args.component)}
                    {...col.args.props}
                    bind:value={row[col.args.bind]}
                    id={col.args.idPrefix + row[col.args.idElement]}
                  />
                {:else if typeof row[col["display"]] === "string" && row[col["display"]].includes("*Bad Data*")}
                  (Not Set)
                {:else if col.colorField}
                  <p class={row[col.colorField]}>{row[col["display"]]}</p>
                {:else}
                  <p>{row[col["display"]]}</p>
                {/if}
              </td>
            {/each}
          </tr>
        {/if}
      {/each}
    </table>
  {/if}
</div>

<style>
  .Red {
    background-color: red;
    color: white;
    font-weight: bold;
  }
  .Yellow {
    background-color: yellow;
    color: black;
    font-weight: bold;
  }
  .Green {
    background-color: green;
    color: white;
    font-weight: bold;
  }
  .Orange {
    background-color: orange;
    color: white;
    font-weight: bold;
  }
  table,
  th,
  td {
    border: 1px solid black;
    border-collapse: collapse;
    padding: 1px;
  }
  .container {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 5px;
  }
</style>
