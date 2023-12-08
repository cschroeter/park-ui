export const Tokens = () => (
  <div className="grid gap-y-8 bg-bg-canvas">
    <div className="grid gap-y-1">
      <h1 className="heading textStyle_2xl">BG</h1>
      <div className="bg-bg-canvas">BG canvas</div>
      <div className="bg-bg-default">BG default</div>
      <div className="bg-bg-subtle">BG subtle</div>
      <div className="bg-bg-muted">BG muted</div>
      <div className="bg-bg-emphasized">BG emphasized</div>
      <div className="bg-bg-disabled">BG disabled</div>
    </div>

    <div className="grid gap-y-1">
      <h1 className="heading textStyle_2xl">FG</h1>
      <div className="text-fg-default">FG default</div>
      <div className="text-fg-muted">FG muted</div>
      <div className="text-fg-subtle">FG subtle</div>
      <div className="text-fg-disabled">FG disabled</div>
    </div>
    <div className="grid gap-y-1">
      <h1 className="heading textStyle_2xl">Border Colors</h1>
      <div className="px-1 border-4 border-border-default">border default</div>
      <div className="px-1 border-4 border-border-muted">border muted</div>
      <div className="px-1 border-4 border-border-subtle">border subtle</div>
      <div className="px-1 border-4 border-border-disabled">border disabled</div>
      <div className="px-1 border-4 border-border-outline">border outline</div>
      <div className="px-1 border-4 border-border-accent">border accent</div>
    </div>
    <div className="grid gap-y-1">
      <h1 className="heading textStyle_2xl">Border Radii</h1>

      <p className="p-2 border rounded-l1">l1 border</p>
      <p className="p-2 border rounded-l2">l2 border</p>
      <p className="p-2 border rounded-l3">l3 border</p>
    </div>
  </div>
)
