<?php
 // created: 2015-03-04 12:01:39
$layout_defs["AOK_KnowledgeBase"]["subpanel_setup"]['aok_knowledgebase_notes'] = array (
  'order' => 100,
  'module' => 'Notes',
  'subpanel_name' => 'default',
  'sort_order' => 'asc',
  'sort_by' => 'id',
  'title_key' => 'LBL_AOK_KNOWLEDGEBASE_NOTES_FROM_NOTES_TITLE',
  'get_subpanel_data' => 'aok_knowledgebase_notes',
  'top_buttons' => 
  array (
    0 => 
    array (
      'widget_class' => 'SubPanelTopButtonQuickCreate',
    ),
    1 => 
    array (
      'widget_class' => 'SubPanelTopSelectButton',
      'mode' => 'MultiSelect',
    ),
  ),
);
