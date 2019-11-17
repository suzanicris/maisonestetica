<template>
  <router-view />
</template>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

$primary: #a98c84;
$link: #260b0a;
$text: #260b0a;
$text-light: #f2f2f2;
$background: #bfaaa3;
$error: red;
$tertiary: #593d3a;

$menu-item-color: #fff;
$menu-item-hover-color: #fff;
$menu-item-active-color: #fff;
$menu-item-active-background-color: $background;
$menu-list-link-padding: 0.5em 3.5em;
$input-disabled-background-color: #e8e8e8;

$colors: (
  "primary": (
    $primary,
    $primary-invert
  ),
  "secondary": (
    $link,
    $link-invert
  ),
  "danger": (
    $error,
    $error
  )
);

@import "~bulma";
@import "~buefy/src/scss/buefy";

body {
  background-color: #f2f2f2;

  .container {
    background-color: white;
    border: 1px solid #bfaaa3;
    border-radius: 8px;
    padding: 24px;
  }
}

.row {
  display: flex;
  align-items: center;
}

.space-between {
  justify-content: space-between;
}

/* TYPOGRAPHY */
h1 {
  text-transform: uppercase;
  font-weight: 700;
}

h3 {
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  color: #260b0a;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 16px;
}

h3:not(:first-child) {
  margin-top: 40px;
}

.label {
  color: #593d3a;
  font-family: "Roboto", sans-serif;
  font-weight: lighter;
  font-size: 12px;
}

.label:not(:last-child) {
  margin-bottom: 4px;
}

/* SPACEAMOUNTS */

$spaceamounts: (
  4,
  8,
  16,
  24,
  32,
  40,
  48,
  56,
  64,
  72
); // Adjust this to include the pixel amounts you need.
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
