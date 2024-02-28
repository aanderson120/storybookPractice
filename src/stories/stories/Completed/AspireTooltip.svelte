<script>
  //AspireTooltip.svelte
  //Reusable tooltip component

  export let visability;
  export let tooltipText = "This is a warning";
  export let position = "top" || "right" || "bottom" || "left";
  export let textColor = "";
</script>

<div class={["mx-1", visability].join(" ")}>
  <span class={[textColor, position].join(" ")} data-tooltip={tooltipText}
    >!
  </span>
</div>

<style>
  [data-tooltip],
  .tooltip {
    position: relative;
    cursor: help;
  }
  /* Base styles for the entire tooltip */
  [data-tooltip]:before,
  [data-tooltip]:after,
  .tooltip:before,
  .tooltip:after {
    position: absolute;
    visibility: hidden;
    opacity: 0;
    transform: translate3d(0, 0, 0);
    pointer-events: none;
  }

  /* Show the entire tooltip on hover and focus */
  [data-tooltip]:hover:before,
  [data-tooltip]:hover:after,
  [data-tooltip]:focus:before,
  [data-tooltip]:focus:after,
  .tooltip:hover:before,
  .tooltip:hover:after,
  .tooltip:focus:before,
  .tooltip:focus:after {
    visibility: visible;
    opacity: 1;
  }

  /* Base styles for the tooltip's directional arrow */
  .tooltip:before,
  [data-tooltip]:before {
    z-index: 1001;
    border: 6px solid transparent;
    background: transparent;
    content: "";
  }

  /* Base styles for the tooltip's content area */
  .tooltip:after,
  [data-tooltip]:after {
    z-index: 1000;
    padding: 8px;
    min-width: 160px;
    background-color: #000;
    background-color: #333333e6;
    color: #fff;
    content: attr(data-tooltip);
    line-height: 1.2;
  }

  /* Top (default) */
  [data-tooltip]:before,
  [data-tooltip]:after,
  .tooltip:before,
  .tooltip:after,
  .top:before,
  .top:after {
    bottom: 100%;
    left: 50%;
  }

  [data-tooltip]:before,
  .tooltip:before,
  .top:before {
    margin-left: -6px;
    margin-bottom: -12px;
    border-top-color: #000;
    border-top-color: #333333e6;
  }

  /* Horizontally align top/bottom tooltips */
  [data-tooltip]:after,
  .tooltip:after,
  .top:after {
    margin-left: -80px;
  }

  [data-tooltip]:hover:before,
  [data-tooltip]:hover:after,
  [data-tooltip]:focus:before,
  [data-tooltip]:focus:after,
  .tooltip:hover:before,
  .tooltip:hover:after,
  .tooltip:focus:before,
  .tooltip:focus:after,
  .top:hover:before,
  .top:hover:after,
  .top:focus:before,
  .top:focus:after {
    transform: translateY(-12px);
  }

  /* Left */
  .left:before,
  .left:after {
    right: 100%;
    bottom: 50%;
    left: auto;
  }

  .left:before {
    margin-left: 0;
    margin-right: -12px;
    margin-bottom: 0;
    border-top-color: transparent;
    border-left-color: #000;
    border-left-color: #333333e6;
  }

  .left:hover:before,
  .left:hover:after,
  .left:focus:before,
  .left:focus:after {
    transform: translateX(-12px);
  }

  /* Bottom */
  .bottom:before,
  .bottom:after {
    top: 100%;
    bottom: auto;
    left: 50%;
  }

  .bottom:before {
    margin-top: -12px;
    margin-bottom: 0;
    border-top-color: transparent;
    border-bottom-color: #000;
    border-bottom-color: #333333e6;
  }

  .bottom:hover:before,
  .bottom:hover:after,
  .bottom:focus:before,
  .bottom:focus:after {
    transform: translateY(12px);
  }

  /* Right */
  .right:before,
  .right:after {
    bottom: 50%;
    left: 100%;
  }

  .right:before {
    margin-bottom: 0;
    margin-left: -12px;
    border-top-color: transparent;
    border-right-color: #000;
    border-right-color: #333333e6;
  }

  .right:hover:before,
  .right:hover:after,
  .right:focus:before,
  .right:focus:after {
    transform: translateX(12px);
  }

  /* Move directional arrows down a bit for left/right tooltips */
  .left:before,
  .right:before {
    top: 3px;
  }

  /* Vertically center tooltip content for left/right tooltips */
  .left:after,
  .right:after {
    margin-left: 0;
    margin-bottom: -16px;
  }
</style>
