<template>
  <router-view />
</template>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

$primary: #a98c84;
$link: #260b0a;
$text: #260B0A;
$text-light: #F2F2F2;
$background: #BFAAA3;

$menu-item-color: #fff;
$menu-item-hover-color: #fff;
$menu-item-active-color: #fff;
$menu-item-active-background-color: $background;
$menu-list-link-padding: 0.5em 3.5em;

$colors: (
  "primary": (
    $primary,
    $primary-invert
  ),
  "secondary": (
    $link,
    $link-invert
  )
);

@import "~bulma";
@import "~buefy/src/scss/buefy";

body {
  background-color:#F2F2F2;

  .container {
    background-color: white;
    border: 1px solid #BFAAA3;
    border-radius: 8px;
    padding: 24px;
  }
}

.row {
  display: flex;
  align-items: center
}

.space-between {
  justify-content: space-between;
}

/* TYPOGRAPHY */ 
h1 {
  text-transform: uppercase;
  font-weight: 700;
}

/* SPACEAMOUNTS */

$spaceamounts: (4, 8, 16, 24, 32, 40, 48, 56, 64, 72); // Adjust this to include the pixel amounts you need.
$sides: (top, bottom, left, right); // Leave this variable alone

@each $space in $spaceamounts {
  @each $side in $sides {
    .m#{str-slice($side, 0, 1)}-#{$space} {
      margin-#{$side}: #{$space}px !important;
    }
  
    .p#{str-slice($side, 0, 1)}-#{$space} {
      padding-#{$side}: #{$space}px !important;
    }
  }
}

</style>
