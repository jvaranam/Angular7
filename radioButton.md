# Usage of Radio buttons with dynamic check box enabling 

<input type="radio" name="eventType" (change)="onEventType('once')" checked="{{sd.isFrequencyOnce}}"/>
<input type="radio" value="onetime" name="repeatType" (click)="onWeekly()" [checked]="sd.isFrequencyOnce" />
