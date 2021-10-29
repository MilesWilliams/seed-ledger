import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { UIDService } from 'src/app/core/services/uid.service';

@Component({
  selector: 'sl-icon',
  templateUrl: './sl-icon.component.html',
  styleUrls: ['./sl-icon.component.scss'],
  host: {
		"[attr.title]": "ariaTitle",
		"[attr.aria-hidden]": "ariaHidden",
		"[attr.aria-labelledby]": "ariaLabelledBy",
		"role": "img"
  },
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class SlIconComponent implements OnInit {
  @Input() type: string;
  @Input() title?: string;
  public ariaHidden: true | null;
  public ariaLabelledBy: string | null;
  public ariaTitle: string | null;


  // I initialize the app-icon component.
  constructor(private uidSvc: UIDService) {

    this.ariaHidden = true;
    this.ariaLabelledBy = null;
    this.ariaTitle = null;

  }

  ngOnInit(): void {
  }

  // I get called when the input binding are updated.
  public ngOnChanges(): void {

    if (this.title) {

      // If a title was provided, it means that this icon is more than just a
      // decorative element. As such, let's try to make it more accessible to
      // screen-readers.
      this.ariaHidden = null;
      this.ariaLabelledBy = (this.ariaLabelledBy || this.uidSvc.next());
      this.ariaTitle = this.title;

    } else {

      // If there is no title, we want to hide this icon from screen-readers.
      this.ariaHidden = true;
      this.ariaLabelledBy = null;
      this.ariaTitle = null;

    }

  }

  public getIcon() {
    return `assets/icons/sl-${this.type}.svg`;
  }
}
