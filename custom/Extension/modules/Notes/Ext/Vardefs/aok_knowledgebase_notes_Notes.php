<?php
// created: 2015-03-04 12:01:39
$dictionary["Note"]["fields"]["aok_knowledgebase_notes"] = array (
  'name' => 'aok_knowledgebase_notes',
  'type' => 'link',
  'relationship' => 'aok_knowledgebase_notes',
  'source' => 'non-db',
  'module' => 'AOK_KnowledgeBase',
  'bean_name' => false,
  'vname' => 'LBL_AOK_KNOWLEDGEBASE_NOTES_FROM_AOK_KNOWLEDGEBASE_TITLE',
  'id_name' => 'aok_knowledgebase_notesaok_knowledgebase_ida',
);
$dictionary["Note"]["fields"]["aok_knowledgebase_notes_name"] = array (
  'name' => 'aok_knowledgebase_notes_name',
  'type' => 'relate',
  'source' => 'non-db',
  'vname' => 'LBL_AOK_KNOWLEDGEBASE_NOTES_FROM_AOK_KNOWLEDGEBASE_TITLE',
  'save' => true,
  'id_name' => 'aok_knowledgebase_notesaok_knowledgebase_ida',
  'link' => 'aok_knowledgebase_notes',
  'table' => 'aok_knowledgebase',
  'module' => 'AOK_KnowledgeBase',
  'rname' => 'name',
);
$dictionary["Note"]["fields"]["aok_knowledgebase_notesaok_knowledgebase_ida"] = array (
  'name' => 'aok_knowledgebase_notesaok_knowledgebase_ida',
  'type' => 'link',
  'relationship' => 'aok_knowledgebase_notes',
  'source' => 'non-db',
  'reportable' => false,
  'side' => 'right',
  'vname' => 'LBL_AOK_KNOWLEDGEBASE_NOTES_FROM_NOTES_TITLE',
);
