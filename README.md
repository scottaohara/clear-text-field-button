# Clear text field buttons

[Checkout the demo and read the explainer](https://scottaohara.github.io/clear-text-field-button/) for more information.

## Required Markup

The most minimal required markup for this pattern is as follows:
```html
<custom-clear>
  <input>
</custom-clear>
```

Though you're going to want to provide more information than that.

```html
<label for=ex>Example</label>
<div>
  <custom-clear>
    <input id=ex>
  </custom-clear>
</div>
```

Once the script runs, a clear button will be added as a sibling to the `<input>` element:
```html
<span class="clr-btn" role="button" aria-label="clear entry" tabindex="-1" hidden>
  <span aria-hidden="true">×</span>
</span>
```

You can import the script or add it directly to your page. Then call the function like so:
```html
<script src="index.js"></script>
<script>
  const els = document.querySelectorAll('custom-clear');
  for ( let i = 0; i < els.length; i++ ) {
    customClear(els[i])
  }
</script>
```

Change the custom element's name, or don't use a custom element at all and instead do something like a `<span class=foo>`.  I just like using custom elements instead of giving class names to `<div>`s or `<span>`s.


## License & Such  

This script was written by Scott O'Hara: [Website](https://www.scottohara.me), [Twitter](https://twitter.com/scottohara).

It has an [MIT license](https://github.com/scottaohara/clear-text-field-button/blob/main/LICENSE).

Use it, modify it, contribute to it! I hope it helps make your project more accessible :)
